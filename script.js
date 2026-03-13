document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/80', 'backdrop-blur-md');
        } else {
            nav.classList.remove('bg-black/80', 'backdrop-blur-md');
        }
    });

    // 2. Simple Button Click Interaction
    const primaryBtn = document.querySelector('button.bg-blue-600');
    primaryBtn.addEventListener('click', () => {
        alert('Initializing Guard Shield AI Secure Terminal...');
    });

    // 3. Staggered Animation for Cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

