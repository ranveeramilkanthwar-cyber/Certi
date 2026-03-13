document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollBar = document.getElementById('scroll-progress');
    const scanBtn = document.getElementById('scan-init');
    const scanBar = document.getElementById('scan-bar');
    const statusText = document.getElementById('status-text');

    // 1. Scroll Logic (Progress Bar & Nav)
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + "%";

        if (window.scrollY > 20) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 2. Functional AI Scan Simulator
    scanBtn.addEventListener('click', () => {
        if (scanBtn.disabled) return;
        
        scanBtn.disabled = true;
        scanBtn.innerText = "Analyzing Traffic...";
        statusText.classList.add('pulse-text');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                completeScan();
            }
            scanBar.style.width = progress + "%";
            statusText.innerText = `Scanning: ${Math.floor(progress)}%`;
        }, 200);
    });

    function completeScan() {
        statusText.classList.remove('pulse-text');
        statusText.innerText = "✓ 0 Threats Detected";
        statusText.classList.replace('text-blue-400', 'text-green-400');
        scanBtn.innerText = "Audit Complete";
        scanBtn.classList.add('bg-green-600', 'text-white');
        
        setTimeout(() => {
            alert("Security Report: Your environment is currently protected by Guard Shield AI.");
        }, 500);
    }
});

