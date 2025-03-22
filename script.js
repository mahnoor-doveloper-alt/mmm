function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}







// Logo move effect in all directions
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    let xDirection = 1, yDirection = 1;
    let xPos = 0, yPos = 0;
    
    logo.addEventListener("mouseenter", function() {
        let interval = setInterval(() => {
            if (xPos >= 10 || xPos <= -10) {
                xDirection *= -1;
            }
            if (yPos >= 10 || yPos <= -10) {
                yDirection *= -1;
            }
            xPos += xDirection;
            yPos += yDirection;
            logo.style.transform = `translate(${xPos}px, ${yPos}px)`;
        }, 50);
        
        logo.addEventListener("mouseleave", function() {
            clearInterval(interval);
            logo.style.transform = "translate(0, 0)";
        }, { once: true });
    });
});
//......................................SCRL




//.................................................images...........................................//


let currentIndex = 0;

        function moveSlide(direction) {
            const carousel = document.querySelector('.carousel');
            const totalImages = document.querySelectorAll('.carousel img').length;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalImages - 1;
            } else if (currentIndex >= totalImages) {
                currentIndex = 0;
            }

            const offset = -currentIndex * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }

        // Auto slide functionality
        setInterval(() => {
            moveSlide(1);
        }, 3000);  
        //..................................ANIMATION..........................//

        window.onload = function () { 
            setTimeout(function () {
                document.getElementById("preloader").style.opacity = "0"; // Fade out
                setTimeout(() => {
                    document.getElementById("preloader").style.display = "none"; // Hide completely after fade out
                }, 500); // Hide after fade-out time (500ms)
            }, 3000); // Preloader stays for 3 seconds instead of 2.5 seconds
            
            // Scroll to top on load
            window.scrollTo(0, 0);
        };
        
        //....................................scrlo........................//

        function toggleDetails(element) {
            let details = element.querySelector("p");
            details.style.display = details.style.display === "none" ? "block" : "none";
        }