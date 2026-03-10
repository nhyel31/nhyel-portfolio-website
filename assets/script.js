// Professional Role Slideshow Logic
const roles = ['Web Developer', 'Graphic Designer', 'Admin Specialist'];
const textElement = document.getElementById('typed');
let currentIndex = 0;

/**
 * Handles the smooth transition between professional roles.
 * Matches the 0.5s transition speed defined in your CSS.
 */
function changeRole() {
    // 1. Initiate Fade Out
    textElement.style.opacity = '0';

    setTimeout(() => {
        // 2. Update the text content while the element is invisible
        // This prevents the user from seeing the text "snap"
        currentIndex = (currentIndex + 1) % roles.length;
        textElement.textContent = roles[currentIndex];

        // 3. Initiate Fade In
        textElement.style.opacity = '1';
    }, 500); // 500ms matches the CSS transition duration
}

// Ensure the element has the transition property set for the opacity change
textElement.style.transition = 'opacity 0.5s ease-in-out';

// Set the slideshow to cycle every 3 seconds
setInterval(changeRole, 3000);

// Optional: Smooth Scroll initialization for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


