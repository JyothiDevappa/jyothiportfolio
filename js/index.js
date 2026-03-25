

        document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.querySelector('#mobile-menu');
            const navLinks = document.querySelector('#nav-list');

            menuToggle.addEventListener('click', function () {
                // Toggle 'is-active' class on both elements
                menuToggle.classList.toggle('is-active');
                navLinks.classList.toggle('is-active');
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.main-menu-links a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('is-active');
                    navLinks.classList.remove('is-active');
                });
            });
        });




                const nameElement = document.querySelector(".hero_name");
        const targetValue = nameElement.dataset.value;
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        function runOdometer() {
            let iteration = 0;
            clearInterval(nameElement.timer);

            nameElement.timer = setInterval(() => {
                nameElement.innerText = targetValue.split("")
                    .map((letter, index) => {
                        if (index < iteration) return targetValue[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iteration >= targetValue.length) clearInterval(nameElement.timer);
                iteration += 1 / 3;
            }, 50);
        }

        window.onload = runOdometer;
        nameElement.onmouseenter = runOdometer;






          document.querySelector('.scroll-widget').addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

























        




