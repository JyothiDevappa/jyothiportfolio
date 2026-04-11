
        const words = ["UX/UI DESIGNS", "MODERN WEBSITES", "FULL-STACK APPS"];
        let i = 0;
        let j = 0;
        let isDeleting = false;

        function typeEffect() {
            const target = document.getElementById("typewriter");
            if (!target) return;

            let currentWord = words[i];

            if (isDeleting) {
                target.textContent = currentWord.substring(0, j - 1);
                j--;
            } else {
                target.textContent = currentWord.substring(0, j + 1);
                j++;
            }

            if (!isDeleting && j === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Hold the word for 2 seconds
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 60 : 120);
            }
        }

        // Initialize after page load
        window.onload = typeEffect;