const aboutWindow = document.getElementById('aboutWindow');
    const closeButton = document.getElementById('closeAbout');

    let touchstartX = 0;
    let touchendX = 0;

    // Function to handle the swipe gesture
    function handleSwipe() {
        if (touchendX < touchstartX) {
            // Swiped left
            closeAboutWindow();
        }
    }

    // Function to close the about window
    function closeAboutWindow() {
        aboutWindow.classList.remove('open');  // Assuming you toggle the 'open' class to show the window
        console.log('About window closed');
    }

    // Event listener for touchstart
    aboutWindow.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;  // Get the starting touch point
    });

    // Event listener for touchend
    aboutWindow.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;  // Get the ending touch point
        handleSwipe();  // Call the function to check for a swipe
    });

    // Optional: You can also add a button to close the window manually
    closeButton.addEventListener('click', closeAboutWindow);