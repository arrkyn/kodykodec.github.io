function checkScrollPosition() {
    var container = document.getElementById('content-container');
    var indicator = document.getElementById('scroll-indicator');
    
    // Get the top and bottom text elements
    var titleText = document.getElementById('title-text');
    var landingText = document.getElementById('landing-text');

    // Check if content is overflowing
    if (container.scrollHeight > container.clientHeight) {
        // If scrolling is possible, we show the arrow
        indicator.classList.remove('hidden');
    } else {
        // Hide the arrow if no overflow
        indicator.classList.add('hidden');
        return; // Exit the function since no scrolling is possible
    }
    
    // Check the scroll position
    var scrollTop = container.scrollTop;
    var scrollHeight = container.scrollHeight;
    var clientHeight = container.clientHeight;

    // Determine the visibility of the title and landing text
    var titleVisible = titleText.getBoundingClientRect().top >= container.getBoundingClientRect().top;
    var landingVisible = landingText.getBoundingClientRect().bottom <= container.getBoundingClientRect().bottom;

    if (titleVisible && landingVisible) {
        // Both the top and bottom texts are visible
        indicator.classList.add('hidden');
    } else if (scrollTop + clientHeight >= scrollHeight) {
        // User is at the bottom of the scrollable content
        indicator.innerHTML = '&#x25B2;'; // Change arrow to point up (▲)
        indicator.style.opacity = '1'; // Ensure the arrow is visible
    } else if (scrollTop === 0) {
        // User is at the top of the scrollable content
        indicator.innerHTML = '&#x25BC;'; // Down arrow (▼)
        indicator.style.opacity = '1'; // Show arrow
    } else {
        // User is scrolling in the middle
        indicator.innerHTML = '&#x25BC;'; // Show down arrow during scroll
        indicator.style.opacity = '1'; // Ensure the arrow is visible
    }
}

// Call the function when the user scrolls inside the container
document.getElementById('content-container').addEventListener('scroll', checkScrollPosition);

// Call the function on page load and resize to determine initial state
window.addEventListener('load', checkScrollPosition);
window.addEventListener('resize', checkScrollPosition);
