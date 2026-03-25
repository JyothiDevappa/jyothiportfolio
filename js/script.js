window.onload = function() {
    const starContainer = document.getElementById('stars-field');
    
    // Create stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 60; // Keep stars in sky
        star.style.cssText = `position:absolute; left:${x}%; top:${y}%; width:1px; height:1px; background:#fff; box-shadow: 0 0 5px #fff; border-radius:50%; opacity:${Math.random()}; animation: twinkle ${Math.random() * 5 + 3}s infinite;`;
        starContainer.appendChild(star);
    }
};

// Subtle Parallax for the Mountains
document.addEventListener('mousemove', (e) => {
    const mountains = document.querySelector('.mountain-range');
    const x = (window.innerWidth / 2 - e.pageX) / 100;
    mountains.style.transform = `translateX(${x}px)`;
});




















