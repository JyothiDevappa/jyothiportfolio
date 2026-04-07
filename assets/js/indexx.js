// Handles mobile menu toggle (open/close) and auto-close on link click
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-list');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('is-active');
        navLinks.classList.toggle('is-active');
    });

    document.querySelectorAll('.main-menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navLinks.classList.remove('is-active');
        });
    });
});






window.addEventListener('load', () => {
    const progress = document.querySelector('.progress-fill');
    const percent = document.getElementById('load-percent');
    const loader = document.getElementById('preloader');
    
    let width = 0;
    
    // FAST LOADING LOGIC
    let loadingInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(loadingInterval);
            
            // Minimal pause at 100% for a snappy feel
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600); // Quick fade out
            }, 200);
        } else {
            // Increased increments (4% to 9% per tick) for a faster crawl
            let increment = Math.floor(Math.random() * 6) + 4; 
            width += increment;
            
            if (width > 100) width = 100;
            
            progress.style.width = width + '%';
            percent.innerText = width + '%';
        }
    }, 80); // Ticks every 80ms (2x faster than your 160ms version)
});


// Smooth scrolls down one screen height when scroll widget is clicked
document.querySelector('.scroll-widget').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});



/* ==========================================
   1. NAVIGATION & TYPED EFFECT
   ========================================== */
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

new Typed(".typing", {
    strings: [
        "modern websites",
        "full-stack applications",
        "responsive designs",
        "UI/UX designs",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: false // <--- ADD THIS LINE TO REMOVE THE WHITE LINE
});








/* ==========================================
   5. PORTFOLIO VIDEO OVERLAYS
   ========================================== */
document.querySelectorAll(".portfolio-page-wrapper .video-box").forEach(box => {
    const videoElem = box.querySelector("video");
    const overlay = box.querySelector(".video-overlay");
    const icon = overlay.querySelector("i");

    overlay.addEventListener("click", () => {
        if (videoElem.paused) {
            videoElem.play();
            box.classList.add("playing");
            icon.classList.replace("fa-play", "fa-pause");
        } else {
            videoElem.pause();
            box.classList.remove("playing");
            icon.classList.replace("fa-pause", "fa-play");
        }
    });

    videoElem.addEventListener("ended", () => {
        box.classList.remove("playing");
        icon.classList.replace("fa-pause", "fa-play");
    });
});


window.onload = function () {
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

const aboutData = {


    career: `
        <h2 style="color:#00d9ff">MISSION_LOG</h2>
        <p><b>Goal:</b> Looking for an opportunity to start my career as a developer.</p>
        <p><b>Strength:</b> Turning complex ideas into user-friendly websites without the corporate fluff.</p>
    `
};

function unlockData(type) {
    const overlay = document.getElementById('info-overlay');
    const content = document.getElementById('panel-content');
    content.innerHTML = aboutData[type];
    overlay.style.display = 'flex';
}

function closePanel() {
    document.getElementById('info-overlay').style.display = 'none';
}

function showAboutCard() {
    document.getElementById('about-card-overlay').style.display = 'flex';
}

function hideAboutCard() {
    document.getElementById('about-card-overlay').style.display = 'none';
}

function showSkillsCard() {
    document.getElementById('skills-card-overlay').style.display = 'flex';
}

function hideSkillsCard() {
    document.getElementById('skills-card-overlay').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("exp-trigger-link");
    const overlay = document.getElementById("intern-overlay");
    const closeBtn = document.getElementById("close-intern");

    if (trigger) {
        trigger.addEventListener("click", () => {
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Stop background scroll
        });
    }

    const closeHandler = () => {
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeHandler);

    // Close if user clicks the dark area outside the box
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeHandler();
    });
});