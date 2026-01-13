<?php
/**
 * Feedback Form Wireframe
 *
 * An embeddable feedback form for rating AI transcription quality.
 * Can be included in any PHP page or rendered standalone.
 *
 * Usage:
 *   - Standalone: Access directly as feedback_form.php?call_id=123
 *   - Embedded: include 'feedback_form.php'; render_feedback_form($call_id);
 *   - iframe: <iframe src="feedback_form.php?call_id=123"></iframe>
 */

// Configuration
$FEEDBACK_PROXY_URL = '/helpline/api/feedback_proxy.php';

/**
 * Render the feedback form HTML
 * @param string|null $call_id - The call ID to associate with feedback
 * @param array $options - Optional configuration (title, show_transcription, etc.)
 */
function render_feedback_form($call_id = null, $options = []) {
    global $FEEDBACK_PROXY_URL;

    $title = $options['title'] ?? 'Rate Transcription Quality';
    $show_transcription = $options['show_transcription'] ?? false;
    $transcription_text = $options['transcription'] ?? '';
    $form_id = $options['form_id'] ?? 'feedback_form_' . uniqid();

    ?>
    <div class="feedback-widget" id="<?php echo htmlspecialchars($form_id); ?>">
        <style>
            .feedback-widget {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                background: #f9fafb;
                padding: 1.5rem;
                border-radius: 8px;
                margin: 1rem 0;
                border: 1px solid #e5e7eb;
                max-width: 600px;
            }
            .feedback-widget * {
                box-sizing: border-box;
            }
            .feedback-widget h3 {
                margin: 0 0 1rem 0;
                font-size: 1.25rem;
                color: #1f2937;
            }
            .feedback-widget .fb-section {
                margin-bottom: 1rem;
            }
            .feedback-widget .fb-label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: #374151;
            }
            .feedback-widget .fb-transcription {
                background: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 4px;
                padding: 1rem;
                margin-bottom: 1rem;
                max-height: 200px;
                overflow-y: auto;
                font-size: 0.9rem;
                line-height: 1.5;
                color: #4b5563;
            }

            /* Radio buttons for Yes/No */
            .feedback-widget .fb-radio-group {
                display: flex;
                gap: 1.5rem;
            }
            .feedback-widget .fb-radio-group label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
            }
            .feedback-widget .fb-radio-group input[type="radio"] {
                width: 1rem;
                height: 1rem;
                cursor: pointer;
            }

            /* Star Rating */
            .feedback-widget .fb-star-container {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
            }
            .feedback-widget .fb-star-container input[type="radio"] {
                display: none;
            }
            .feedback-widget .fb-star-container label {
                color: #d1d5db;
                cursor: pointer;
                font-size: 2.5rem;
                transition: color 0.15s;
                line-height: 1;
                padding: 0 2px;
            }
            .feedback-widget .fb-star-container label:hover,
            .feedback-widget .fb-star-container label:hover ~ label {
                color: #facc15;
            }
            .feedback-widget .fb-star-container input[type="radio"]:checked ~ label {
                color: #facc15;
            }

            /* Textarea */
            .feedback-widget .fb-issues {
                display: none;
            }
            .feedback-widget .fb-issues.visible {
                display: block;
            }
            .feedback-widget .fb-textarea {
                width: 100%;
                min-height: 100px;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                border-radius: 4px;
                font-size: 0.9rem;
                resize: vertical;
                font-family: inherit;
            }
            .feedback-widget .fb-textarea:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
            }

            /* Submit Button */
            .feedback-widget .fb-submit-btn {
                background: #3b82f6;
                color: #fff;
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: 4px;
                font-size: 1rem;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.15s;
            }
            .feedback-widget .fb-submit-btn:hover {
                background: #2563eb;
            }
            .feedback-widget .fb-submit-btn:disabled {
                background: #9ca3af;
                cursor: not-allowed;
            }

            /* Status Message */
            .feedback-widget .fb-status {
                margin-top: 0.75rem;
                font-size: 0.9rem;
            }
            .feedback-widget .fb-status.success {
                color: #10b981;
            }
            .feedback-widget .fb-status.error {
                color: #ef4444;
            }
            .feedback-widget .fb-status.loading {
                color: #6b7280;
            }
        </style>

        <h3><?php echo htmlspecialchars($title); ?></h3>

        <?php if ($show_transcription && $transcription_text): ?>
        <div class="fb-transcription">
            <?php echo nl2br(htmlspecialchars($transcription_text)); ?>
        </div>
        <?php endif; ?>

        <form class="fb-form" onsubmit="return false;">
            <input type="hidden" name="call_id" value="<?php echo htmlspecialchars($call_id ?? ''); ?>">

            <!-- Yes/No Question -->
            <div class="fb-section">
                <span class="fb-label">Was this transcription accurate?</span>
                <div class="fb-radio-group">
                    <label>
                        <input type="radio" name="feedback_ok" value="yes">
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="feedback_ok" value="no">
                        No
                    </label>
                </div>
            </div>

            <!-- Star Rating -->
            <div class="fb-section">
                <span class="fb-label">Rate accuracy (1-5):</span>
                <div class="fb-star-container">
                    <input type="radio" name="feedback_rating" value="5" id="<?php echo $form_id; ?>_star5">
                    <label for="<?php echo $form_id; ?>_star5">&#9733;</label>
                    <input type="radio" name="feedback_rating" value="4" id="<?php echo $form_id; ?>_star4">
                    <label for="<?php echo $form_id; ?>_star4">&#9733;</label>
                    <input type="radio" name="feedback_rating" value="3" id="<?php echo $form_id; ?>_star3">
                    <label for="<?php echo $form_id; ?>_star3">&#9733;</label>
                    <input type="radio" name="feedback_rating" value="2" id="<?php echo $form_id; ?>_star2">
                    <label for="<?php echo $form_id; ?>_star2">&#9733;</label>
                    <input type="radio" name="feedback_rating" value="1" id="<?php echo $form_id; ?>_star1">
                    <label for="<?php echo $form_id; ?>_star1">&#9733;</label>
                </div>
            </div>

            <!-- Issues Section (hidden by default) -->
            <div class="fb-section fb-issues">
                <span class="fb-label">Please explain what went wrong:</span>
                <textarea class="fb-textarea" name="feedback_text" placeholder="Type details here..."></textarea>
            </div>

            <!-- Submit -->
            <div class="fb-section">
                <button type="button" class="fb-submit-btn" onclick="submitFeedback(this)">
                    Submit Feedback
                </button>
                <div class="fb-status"></div>
            </div>
        </form>
    </div>

    <script>
    (function() {
        var formEl = document.getElementById('<?php echo $form_id; ?>');
        var form = formEl.querySelector('.fb-form');
        var issuesSection = formEl.querySelector('.fb-issues');

        // Toggle issues section when "No" is selected
        form.querySelectorAll('input[name="feedback_ok"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                if (this.value === 'no') {
                    issuesSection.classList.add('visible');
                } else {
                    issuesSection.classList.remove('visible');
                }
            });
        });
    })();

    async function submitFeedback(btn) {
        var widget = btn.closest('.feedback-widget');
        var form = widget.querySelector('.fb-form');
        var statusEl = widget.querySelector('.fb-status');

        // Get values
        var callId = form.querySelector('input[name="call_id"]').value;
        var ratingEl = form.querySelector('input[name="feedback_rating"]:checked');
        var okayEl = form.querySelector('input[name="feedback_ok"]:checked');
        var feedbackText = form.querySelector('textarea[name="feedback_text"]')?.value || '';

        // Validation
        if (!callId) {
            statusEl.textContent = 'Error: Call ID is missing';
            statusEl.className = 'fb-status error';
            return;
        }

        if (!ratingEl) {
            statusEl.textContent = 'Please select a star rating';
            statusEl.className = 'fb-status error';
            return;
        }

        var payload = {
            call_id: callId,
            rating: parseInt(ratingEl.value),
            was_okay: okayEl ? (okayEl.value === 'yes') : true,
            issues: [],
            feedback_text: feedbackText
        };

        // Submit
        btn.disabled = true;
        statusEl.textContent = 'Submitting...';
        statusEl.className = 'fb-status loading';

        try {
            var response = await fetch('<?php echo $FEEDBACK_PROXY_URL; ?>?action=submit_feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            var result = await response.json();

            if (result.status === 'success') {
                statusEl.textContent = 'Feedback submitted successfully!';
                statusEl.className = 'fb-status success';

                // Reset form after delay
                setTimeout(function() {
                    form.reset();
                    widget.querySelector('.fb-issues').classList.remove('visible');
                    statusEl.textContent = '';
                }, 3000);
            } else {
                throw new Error(result.message || 'Server error');
            }
        } catch (error) {
            statusEl.textContent = 'Error: ' + error.message;
            statusEl.className = 'fb-status error';
        } finally {
            btn.disabled = false;
        }
    }
    </script>
    <?php
}

// If accessed directly, render as standalone page
if (basename($_SERVER['SCRIPT_FILENAME']) === 'feedback_form.php') {
    $call_id = $_GET['call_id'] ?? $_POST['call_id'] ?? null;
    $standalone = isset($_GET['standalone']) || !isset($_GET['embed']);

    if ($standalone):
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Helpline Feedback</title>
    <style>
        body {
            margin: 0;
            padding: 2rem;
            background: #f3f4f6;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    </style>
</head>
<body>
    <?php render_feedback_form($call_id); ?>
</body>
</html>
    <?php
    else:
        // Embed mode - just render the form
        render_feedback_form($call_id);
    endif;
}
?>
