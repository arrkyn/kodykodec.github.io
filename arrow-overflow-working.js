document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('content-container');
    var indicator = document.getElementById('scroll-indicator');
    var lastLine = document.querySelector('#landing-text p:last-child'); // Select the last line (Thanks for visiting!)
    
    // Create an intersection observer to track visibility of the last line
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Last line is visible, change arrow direction to up and hide arrow
                indicator.innerHTML = '&#x25B2;'; // Up arrow (▲)
                indicator.style.opacity = '0'; // Optionally hide the arrow when at the bottom
            } else {
                // Last line is not visible, show down arrow
                indicator.innerHTML = '&#x25BC;'; // Down arrow (▼)
                indicator.style.opacity = '1'; // Show arrow
            }
        });
    }, {
        root: container, // Observe within the scrollable container
        threshold: 1.0 // Fully visible when 100% of the element is in view
    });

    // Observe the last line
    observer.observe(lastLine);

    // Initial check if container has overflow
    function checkOverflow() {
        if (container.scrollHeight > container.clientHeight) {
            indicator.classList.remove('hidden'); // Show arrow if overflow
        } else {
            indicator.classList.add('hidden'); // Hide arrow if no overflow
        }
    }

    // Run checkOverflow on load and resize
    window.addEventListener('load', checkOverflow);
    window.addEventListener('resize', checkOverflow);
});
