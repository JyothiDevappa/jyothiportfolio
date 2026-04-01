function createStars() {
            const container = document.getElementById('star-container');
            const starCount = 150;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'stars';

                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;

                // Random duration & delay
                const duration = 2 + Math.random() * 5;
                const delay = Math.random() * 5;

                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.setProperty('--duration', `${duration}s`);
                star.style.animationDelay = `${delay}s`;

                container.appendChild(star);
            }
        }

        // Initialize Galaxy
        createStars();

        // Smooth Entrance on Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.module').forEach(m => observer.observe(m));
        