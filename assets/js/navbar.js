
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

