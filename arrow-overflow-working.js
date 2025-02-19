document.addEventListener('DOMContentLoaded', function () {
    const indicator = document.getElementById('scroll-indicator');
    const surveyLink = document.querySelector('.survey-link'); // Selecting the survey link

    // Helper function to hide the arrow when the survey link is visible
    function hideArrowWhenSurveyLinkVisible(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Survey link is visible, change arrow direction to up and hide arrow
                indicator.innerHTML = '&#x25B2;'; // Up arrow (▲)
                indicator.classList.add('hidden'); // Hide the arrow
            } else {
                // Survey link is not visible, change arrow direction to down and show arrow
                indicator.innerHTML = '&#x25BC;'; // Down arrow (▼)
                indicator.classList.remove('hidden'); // Show the arrow
            }
        });
    }

    // Create an IntersectionObserver to track visibility of the survey link
    const observer = new IntersectionObserver(hideArrowWhenSurveyLinkVisible, {
        root: null, // Observe visibility in the viewport
        threshold: 1.0 // Trigger when the entire survey link is in view
    });

    // Start observing the survey link
    observer.observe(surveyLink);

    // Function to check if it's a mobile screen
    function isMobile() {
        return window.innerWidth <= 768; // Consider 768px or lower as mobile
    }

    // Function to check if the user has reached the bottom of the page
    function checkScrollPosition() {
        if (isMobile()) {
            // Check if the user is at the bottom of the page
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight) {
                indicator.innerHTML = '&#x25BC;';
                indicator.style.opacity = '1';  // Make sure it's visible
            } else {
                indicator.innerHTML = '&#x25BC;';
                indicator.style.opacity = '1';  // Show arrow
            }
        }
    }

    // Event listener for scroll events
    window.addEventListener('scroll', checkScrollPosition);

    // Initial check for scroll position when the page is loaded
    checkScrollPosition();

    // Function to show the arrow when needed
    function showArrow() {
        if (isMobile()) {
            indicator.classList.remove('hidden'); // Show the arrow on mobile
        } else {
            indicator.classList.add('hidden'); // Hide the arrow on non-mobile screens
        }
    }

    // Event listener for window resize to handle screen size changes
    window.addEventListener('resize', function () {
        showArrow();
        checkScrollPosition(); // Check scroll position again on resize
    });

    // Initial check when the page loads
    showArrow();
});
