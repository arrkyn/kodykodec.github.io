// Lines and elements for managing the UI interaction
const lineTopLeft = document.querySelector('.line-top-left');
const lineTopRight = document.querySelector('.line-top-right');
const lineLeftVert = document.querySelector('.line-left-vert');
const lineRightVert = document.querySelector('.line-right-vert');
const lineBottomLeftAbout = document.querySelector('.line-bottom-left-about');
const lineBottomRightContact = document.querySelector('.line-bottom-right-contact');
const energyIcon = document.querySelector('svg');
const contentContainer = document.getElementById('content-container');

// Initialize variables to track the state of the lights for each nav item
let lightsAboutOn = false;
let lightsContactOn = false;

// Function to show the content container
function showContentContainer() {
    contentContainer.classList.add('show');
}

// Function to hide the content container
function hideContentContainer() {
    contentContainer.classList.remove('show');
}

// Energy Icon click listener
energyIcon.addEventListener('click', function() {
    // If the energy icon is in the "off" state and no lights are on, do nothing
    if (!lightsAboutOn && !lightsContactOn) {
        return; // Do nothing if no lights are on
    }

    // Turn off all lights
    lineTopLeft.classList.remove('light-up');
    lineTopRight.classList.remove('light-up');
    lineLeftVert.classList.remove('light-up');
    lineRightVert.classList.remove('light-up');
    lineBottomLeftAbout.classList.remove('light-up');
    lineBottomRightContact.classList.remove('light-up');
    
    // Turn off the energy icon light
    energyIcon.classList.remove('light');

    // Reset the state of lights for About and Contact
    lightsAboutOn = false;
    lightsContactOn = false;

    // Reset content container visibility
    showContentContainer();
});

// About click listener
document.getElementById('about').addEventListener('click', function() {
    if (lightsContactOn) { // If any other lights are on
        // Turn off all other lights other than 'about'
        lineBottomRightContact.classList.remove('light-up');
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        
        // Turn on lights to 'about'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');

        // Turn on battery
        energyIcon.classList.add('light');
       
        // Set the light states
        lightsAboutOn = true;
        lightsContactOn = false;

        hideContentContainer();
    } else if (!lightsAboutOn) { // If lights to about are off
        // Turn the lights on for 'about'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');

        // Turn on battery
        energyIcon.classList.add('light');

        // Set the light states
        lightsAboutOn = true;
        lightsContactOn = false;

        hideContentContainer();
    } else if (lightsAboutOn) { // If lights to about are on
        // Turn the lights off for 'about'
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');

        // Turn off all other lights
        lineBottomRightContact.classList.remove('light-up');
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        // Turn off battery
        energyIcon.classList.remove('light');

        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsContactOn = false;

        showContentContainer();
    }
});

// Contact click listener
document.getElementById('contact').addEventListener('click', function() {
    if (lightsAboutOn) { // If any other lights are on
        // Turn off all other lights other than 'contact'
        lineBottomLeftAbout.classList.remove('light-up');
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        
        // Turn on lights to 'contact'
        lineTopRight.classList.add('light-up');
        lineRightVert.classList.add('light-up');
        lineBottomRightContact.classList.add('light-up');

        // Turn on battery
        energyIcon.classList.add('light');

        // Set the light states
        lightsAboutOn = false;
        lightsContactOn = true;

        hideContentContainer();
    } else if (!lightsContactOn) { // If lights to contact are off
        // Turn the lights on for 'contact'
        lineTopRight.classList.add('light-up');
        lineRightVert.classList.add('light-up');
        lineBottomRightContact.classList.add('light-up');

        // Turn on battery
        energyIcon.classList.add('light');

        // Set the light states
        lightsAboutOn = false;
        lightsContactOn = true;

        hideContentContainer();
    } else if (lightsContactOn) { // If lights to contact are on
        // Turn the lights off for 'contact'
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        // Turn off all other lights
        lineBottomLeftAbout.classList.remove('light-up');
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');

        // Turn off battery
        energyIcon.classList.remove('light');

        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsContactOn = false;

        showContentContainer();
    }
});
