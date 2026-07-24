/**
 * Ads Manager & Overlay Logic
 * Author: text2tool
 */

// Global Token for Ads
window.adToken = "";

// 1. CSS Inject karna (Taaki HTML file saaf rahe)
const adStyles = `
    #ad-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.95); z-index: 9999; justify-content: center; align-items: center; backdrop-filter: blur(8px); }
    .ad-modal { background: white; padding: 2rem; border-radius: 1.25rem; text-align: center; width: 90%; max-width: 420px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    .timer-text { font-size: 0.95rem; color: #ef4444; font-weight: 700; margin-bottom: 1rem; }
    .skip-btn { width: 100%; padding: 14px; border-radius: 10px; border: none; font-weight: 700; cursor: pointer; transition: 0.3s; }
    .skip-btn:disabled { background: #e2e8f0; color: #94a3b8; cursor: not-allowed; }
    .skip-btn:enabled { background: #10b981; color: white; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4); }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = adStyles;
document.head.appendChild(styleSheet);

// 2. HTML Modal Inject karna
const adHTML = `
    <div id="ad-overlay">
        <div class="ad-modal">
            <h2 style="margin:0; font-size: 1.4rem; color: #1e293b;">Daily Limit Reached</h2>
            <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 1.5rem;">Watch a short ad to unlock another high-quality generation.</p>
            <div style="width:100%; height:250px; background:#f8fafc; border:2px dashed #cbd5e1; border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:1rem;">
               <span style="color:#94a3b8; font-size:12px;">Advertisement Area</span>
            </div>
            <div id="timer-box" class="timer-text">Unlocking in <span id="sec-left">8</span>s...</div>
            <button id="skip-ad-btn" class="skip-btn" disabled onclick="skipAd()">Skip Ad & Generate</button>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', adHTML);

// 3. Logic Functions
window.triggerAdPopup = function() {
    const overlay = document.getElementById('ad-overlay');
    const secSpan = document.getElementById('sec-left');
    const skipBtn = document.getElementById('skip-ad-btn');
    const timerBox = document.getElementById('timer-box');
    
    overlay.style.display = 'flex';
    skipBtn.disabled = true;
    timerBox.style.display = 'block';
    
    let count = 8;
    secSpan.innerText = count;
    
    const interval = setInterval(() => {
        count--;
        secSpan.innerText = count;
        if (count <= 0) {
            clearInterval(interval);
            skipBtn.disabled = false;
            timerBox.style.display = 'none';
        }
    }, 1000);
};

window.skipAd = function() {
    window.adToken = "AD_WATCHED_SUCCESS";
    document.getElementById('ad-overlay').style.display = 'none';
    // Ye function har tool mein 'handleSubmission' ko call karega
    if (typeof handleSubmission === 'function') {
        handleSubmission();
    }
};
