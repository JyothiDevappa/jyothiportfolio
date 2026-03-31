/* ==========================================
   GLOBAL VARIABLES FOR SLIDER
========================================== */
// We removed the single webIndex and mobIndex variables. 
// Instead, we will store the current slide index directly on the HTML element 
// so all 8 projects can have their own independent slide position!

/* ==========================================
   TABS & FILTERING SYSTEM
========================================== */
function switchTheme(themeName, btn) {
    // 1. Swap active tab button visual state
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Change the theme data attribute on the entire section (for background changes)
    const section = document.getElementById('theme-body');
    if (section) {
        section.setAttribute('data-theme', themeName);
    }

    // 3. Filter the projects so only the clicked tab's projects show!
    filterProjects(themeName);
}

function filterProjects(category) {
    const cards = document.querySelectorAll('.tab-project-content');
    
    cards.forEach(card => {
        // If the user clicks ALL (or default), show every card. Otherwise show only matching categories!
        if (category === 'all' || category === 'default' || card.getAttribute('data-category') === category) {
            card.style.display = "grid"; // Forces block to reveal
        } else {
            card.style.display = "none"; // Hides unrelated blocks
        }
    });
}

/* ==========================================
   WEB VS MOBILE TOGGLE SYSTEM
========================================== */
// Added container parameter to target the clicked card specifically
function toggleProjectView(view, btn, container) {
    if (!container) return;

    // 1. Reset toggle buttons ONLY inside this specific card
    const buttons = container.querySelectorAll('.toggle-node');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Target galleries ONLY inside this specific card
    const webGall = container.querySelector('.web-gallery');
    const mobGall = container.querySelector('.mobile-gallery');

    if (!webGall || !mobGall) return;

    if (view === 'web') {
        webGall.classList.add('active');
        mobGall.classList.remove('active');
    } else {
        mobGall.classList.add('active');
        webGall.classList.remove('active');
    }
}

/* ==========================================
   SLIDER / CAROUSEL MECHANICS
========================================== */
// Added container parameter so arrows only move the active card's gallery
function moveSlide(step, container) {
    if (!container) return;

    // Find the active gallery inside this card
    const activeStrip = container.querySelector('.gallery-strip.active');
    if (!activeStrip) return; 
    
    const slides = activeStrip.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    // Get the current index stored on the gallery, or start at 0
    let currentIndex = parseInt(activeStrip.getAttribute('data-current-index')) || 0;

    // Calculate the new slide index
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Save the new index back onto the HTML element
    activeStrip.setAttribute('data-current-index', currentIndex);

    // Slide the gallery strip
    activeStrip.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* ==========================================
   INIT ON PAGE LOAD
========================================== */
window.onload = function() {
    filterProjects('all');
};