// Variables to track swipe start and end positions
let touchstartX = 0;
let touchendX = 0;

const SWIPE_THRESHOLD = 50;

// Function to handle the swipe gesture
function handleSwipe() {
    if (touchendX < touchstartX - SWIPE_THRESHOLD) { 
        closeAboutWindow();
    } else if (touchendX > touchstartX + SWIPE_THRESHOLD) { 
        closeContactWindow();
    }
}

// Function to close the About window
function closeAboutWindow() {
    const fixedFrame = document.querySelector('.fixed-frame');
    fixedFrame.classList.remove('open-about');

    // Turn the lights off for 'about'
    lineTopLeft?.classList.remove('light-up');
    lineLeftVert?.classList.remove('light-up');
    lineBottomLeftAbout?.classList.remove('light-up');

    lineBottomRightContact?.classList.remove('light-up');

    energyIcon?.classList.remove('light');
    topLight?.classList.remove('top-light-outline');
    aboutBorder?.classList.remove('border-button');

    lightsAboutOn = false;
    lightsContactOn = false;

    showContentContainer();
}

// Function to close the Contact window
function closeContactWindow() {
    const fixedFrame = document.querySelector('.fixed-frame');
    fixedFrame.classList.remove('open-contact');

    // Turn the lights off for 'contact'
    lineTopRight?.classList.remove('light-up');
    lineRightVert?.classList.remove('light-up');
    lineBottomRightContact?.classList.remove('light-up');

    energyIcon?.classList.remove('light');
    topLight?.classList.remove('top-light-outline');
    contactBorder?.classList.remove('border-button');

    lightsAboutOn = false;
    lightsContactOn = false;

    showContentContainer();
}

// Add shared touch event handlers for swipe windows
const swipeWindows = document.querySelectorAll('.new-window-about, .new-window-contact');

swipeWindows.forEach((window) => {
    window.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
        e.stopPropagation(); // Prevent interference with scrolling
    });

    window.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;
        e.stopPropagation(); // Prevent interference with scrolling
        handleSwipe();
    });
});
