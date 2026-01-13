<?php

session_start();

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

define('FEEDBACK_DB_URL', 'http://192.168.8.18:8125/api/v1/agent-feedback/update');
define('HELPLINE_API_URL', 'https://192.168.8.13/helpline/api/messages/');



function get_bearer_token() {
    if (isset($_SESSION['ss']) && isset($_SESSION['ss'][0]) && isset($_SESSION['ss'][0][0])) {
        return $_SESSION['ss'][0][0];
    }
    return getenv('BEARER_TOKEN');
}

// Fetch call data and decode messages
 
function fetch_call_data($call_id) {
    $bearer_token = get_bearer_token();
    
    if (!$bearer_token) {
        return ['error' => 'No bearer token available - Session expired?'];
    }
    
    $url = HELPLINE_API_URL . '?src=aii&src_callid=' . urlencode($call_id);
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $bearer_token,
        'Content-Type: application/json'
    ]);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code !== 200) {
        return ['error' => 'Failed to fetch call data', 'http_code' => $http_code];
    }
    
    $data = json_decode($response, true);
    
    if (!isset($data['messages'])) {
        return ['error' => 'No messages found'];
    }
    

    $call_data = [
        'call_id' => $call_id,
        'site_id' => null,
        'transcription' => null,
        'source_language' => null,
        'processing_time' => null,
        'models_used' => null
    ];
    
    foreach ($data['messages'] as $msg) {
        if (count($msg) > 17 && !empty($msg[17])) {
            $decoded = decode_message_payload($msg[17]);
            if (!$decoded) continue;
            
            $notification_type = $decoded['notification_type'] ?? null;
            $payload = $decoded['payload'] ?? [];
            $metadata = $decoded['call_metadata'] ?? [];
            
            if (!$call_data['site_id'] && isset($metadata['site_id'])) $call_data['site_id'] = $metadata['site_id'];
            
            if ($notification_type === 'post_call_transcription') {
                $call_data['transcription'] = $payload['transcript'] ?? null;
                $call_data['source_language'] = $payload['language'] ?? null;
            }
            if ($notification_type === 'post_call_complete') {
                $call_data['processing_time'] = $payload['processing_time'] ?? null;
                $call_data['models_used'] = $payload['models_used'] ?? null;
            }
        }
    }
    
    return $call_data;
}

function decode_message_payload($encoded) {
    try {
        $decoded = base64_decode($encoded);
        if ($decoded === false) return null;
        
        // Gzip (0x1f 0x8b)
        if (strlen($decoded) >= 2 && ord($decoded[0]) === 0x1f && ord($decoded[1]) === 0x8b) {
            $decoded = gzdecode($decoded);
        }
        // Zlib (0x78)
        else if (strlen($decoded) >= 2 && ord($decoded[0]) === 0x78) {
            $decoded = gzinflate($decoded);
        }
        
        return json_decode($decoded, true);
    } catch (Exception $e) {
        return null;
    }
}

function submit_feedback($feedback_data) {
    $reason_parts = [];
    if (!empty($feedback_data['issues'])) $reason_parts[] = 'Issues: ' . implode(', ', $feedback_data['issues']);
    if (!empty($feedback_data['feedback_text'])) $reason_parts[] = 'Comment: ' . $feedback_data['feedback_text'];
    
    $payload = [
        'call_id' => $feedback_data['call_id'],
        'task' => 'transcription',
        'feedback' => (int)$feedback_data['rating'],
        'reason' => !empty($reason_parts) ? implode('. ', $reason_parts) : 'No specific issues reported'
    ];
    
    $ch = curl_init(FEEDBACK_DB_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code === 200 || $http_code === 201) {
        return ['status' => 'success', 'message' => 'Feedback saved'];
    } else {
        return ['status' => 'error', 'message' => 'Failed to save feedback', 'http_code' => $http_code];
    }
}

// Routes
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

if ($method === 'GET' && $action === 'fetch_call') {
    echo json_encode(fetch_call_data($_GET['call_id'] ?? ''));
}
else if ($method === 'POST' && $action === 'submit_feedback') {
    $input = json_decode(file_get_contents('php://input'), true);
    echo json_encode(submit_feedback($input));
}
else {
    http_response_code(404);
    echo json_encode(['error' => 'Invalid endpoint']);
}
?>
