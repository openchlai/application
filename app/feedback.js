te["feedback_form"] = { 
    div: ["", "feedback_widget"], 
    c: [

        { div: ["xx y"], c: [
            { s: ["c xx y b", "Rate Transcription Quality"] },
            { div: ["e"] }
        ]},
        

        { div: ["x y"], c: [
            { s: ["c x y", "Was this transcription accurate?"] },
            { div: ["d l10"], c: [
                { div: ["c r15"], c: [ 
                    { input: ["c", "fb_yes", "feedback_ok", "yes", "radio"] },
                    { label: ["c l05 y02 cursor-pointer", "", "Yes", "fb_yes"] }
                ]},
                { div: ["c"], c: [
                    { input: ["c", "fb_no", "feedback_ok", "no", "radio"] },
                    { label: ["c l05 y02 cursor-pointer", "", "No", "fb_no"] }
                ]}
            ]},
            { div: ["e"] }
        ]},
        

        { div: ["x y", "feedback_stars"], c: [
            { s: ["c x y", "Rate accuracy (1-5):"] },

            { div: ["d feedback_star_container"], c: [
                // Star 5
                { input: ["star-radio", "fb_star_5", "feedback_rating", "5", "radio"] },
                { label: ["feedback_star_label", "", "★", "fb_star_5"] },
                // Star 4
                { input: ["star-radio", "fb_star_4", "feedback_rating", "4", "radio"] },
                { label: ["feedback_star_label", "", "★", "fb_star_4"] },
                // Star 3
                { input: ["star-radio", "fb_star_3", "feedback_rating", "3", "radio"] },
                { label: ["feedback_star_label", "", "★", "fb_star_3"] },
                // Star 2
                { input: ["star-radio", "fb_star_2", "feedback_rating", "2", "radio"] },
                { label: ["feedback_star_label", "", "★", "fb_star_2"] },
                // Star 1
                { input: ["star-radio", "fb_star_1", "feedback_rating", "1", "radio"] },
                { label: ["feedback_star_label", "", "★", "fb_star_1"] }
            ]},
            { div: ["e"] }
        ]},
        
        { div: ["x y g", "feedback_issues"], c: [ 
            { div: ["t10 b05"], c: [
                { s: ["c x y b", "Please explain what went wrong:"] },
                { div: ["e"] }
            ]},
            { textarea: ["feedback_textarea w95 x y p05", "feedback_text", "feedback_text", "", "Type details here..."] },
            { div: ["e"] }
        ]},
        
        // Submit Button 
        { div: ["t15 b10"], c: [
            { ac: ["ao btn", "submit_feedback", "_feedback_submit", "x y gb cw", "Submit Feedback"] },
            { s: ["x y g", "feedback_status"], arg: ["", "call_id", ""] },
            { div: ["e"] }
        ]}
    ]
};

te["aii_feedback_widget"] = { 
    div: ["w60 ma"], 
    c: [
        { div: ["xx y gw bd"], c: [
            { s: ["c xx y b", "AI Transcription"] },
            { div: ["c x y"], uo: ["noop", "", "aiiv", "aii", "payload", "transcript"] },
            { div: ["e"] }
        ]},
        { feedback_form: [] }
    ]
};



function feedback_init() {
    const style = document.createElement('style');
    style.textContent = `
        .feedback_star_container {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
        
        /* 
           Invisible but present inputs. 
           We use opacity 0 so they occupy space in DOM logic but aren't seen.
        */
        .star-radio {
            opacity: 0;
            position: absolute;
            width: 0;
            height: 0;
            margin: 0;
        }
        
        .feedback_star_label {
            color: #ccc;
            cursor: pointer;
            font-size: 3rem;
            transition: color 0.2s;
            line-height: 1;
            padding: 0 2px;
            user-select: none;
        }

        /* HOVER EFFECTS - highlight hovered star and all stars to its left */
        .feedback_star_label:hover,
        .feedback_star_label:hover ~ .feedback_star_label {
            color: #facc15;
        }

        /* CHECKED STATE - highlight checked star and all stars to its left */
        .star-radio:checked + .feedback_star_label,
        .star-radio:checked ~ .feedback_star_label {
            color: #facc15;
        }
        
        .feedback_widget {
            background: #f9fafb;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            border: 1px solid #e5e7eb;
        }
        
        #feedback_issues { display: none; }
        
        .feedback_textarea {
            width: 95% !important;
            height: 100px !important;
            border: 1px solid #ccc !important;
            border-radius: 4px;
            background-color: white !important;
            color: black !important;
            display: block;
            margin-top: 5px;
            padding: 10px;
        }
    `;
    if (document.head) document.head.appendChild(style);
    

    // This connects the label click to the invisible radio button
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('feedback_star_label')) {

            var radio = e.target.previousElementSibling;
            if (radio && radio.type === 'radio') {
                radio.checked = true;
                console.log("Star Selected: " + radio.value);
            } else {
                console.error("Radio input not found sibling to star");
            }
        }
    });

    // Toggle Text Area
    document.addEventListener('change', function(e) {
        if (e.target.name === 'feedback_ok') {
            var widget = e.target.closest('.feedback_widget');
            if (widget) {
                var issuesSection = widget.querySelector('#feedback_issues');
                if (issuesSection) {
                    issuesSection.style.display = e.target.value === 'no' ? 'block' : 'none';
                }
            }
        }
    });
}


async function _feedback_submit(el) {
    console.log("Submit initiated");

    const formContainer = el.closest('.feedback_widget');
    if (!formContainer) return;

    //  Get Call ID
    let callId = null;
    const hiddenInput = formContainer.querySelector('input[name="call_id"]');
    if (hiddenInput && hiddenInput.value) {
        callId = hiddenInput.value;
    } else if (typeof re !== 'undefined' && re["call_"] && re["call_"][0]) {
        callId = re["call_"][0];
    }

    const statusEl = formContainer.querySelector('.feedback_status');

    if (!callId) {
        if (statusEl) {
            statusEl.textContent = 'Error: Call ID missing';
            statusEl.style.color = 'red';
        }
        return;
    }

    // Get Rating
    const ratingEl = formContainer.querySelector('input[name="feedback_rating"]:checked');
    if (!ratingEl) {
        if (statusEl) {
            statusEl.textContent = 'Please select a star rating';
            statusEl.style.color = 'red';
            statusEl.style.display = 'block';
        }
        return;
    }
    const ratingValue = ratingEl.value;

   
    const wasOkayRadio = formContainer.querySelector('input[name="feedback_ok"]:checked');
    const wasOkay = wasOkayRadio ? (wasOkayRadio.value === 'yes') : true;
    const feedbackText = formContainer.querySelector('#feedback_text')?.value || '';
    
    const payload = {
        call_id: callId,
        rating: parseInt(ratingValue),
        was_okay: wasOkay,
        issues: [],
        feedback_text: feedbackText
    };
    
    if (statusEl) {
        statusEl.textContent = 'Submitting...';
        statusEl.style.color = 'gray';
        statusEl.style.display = 'block';
    }
    
    try {
        const response = await fetch('/helpline/api/feedback_proxy.php?action=submit_feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            if (statusEl) {
                statusEl.textContent = '✓ Feedback submitted!';
                statusEl.style.color = '#10b981';
            }
            setTimeout(() => {
                formContainer.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
                const txt = formContainer.querySelector('#feedback_text');
                if (txt) txt.value = '';
                const issueSec = formContainer.querySelector('#feedback_issues');
                if (issueSec) issueSec.style.display = 'none';
                if (statusEl) statusEl.textContent = '';
            }, 3000);
        } else {
            throw new Error(result.message || 'Server error');
        }
    } catch (error) {
        console.error('Feedback error:', error);
        if (statusEl) {
            statusEl.textContent = '✗ Error: ' + error.message;
            statusEl.style.color = '#ef4444';
        }
    }
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', feedback_init);
    } else {
        feedback_init();
    }
}
