// Select all icon images
const icons = document.querySelectorAll('.icon img');

// Function to add the shining effect
function addShiningEffect() {
    icons.forEach(icon => {
        icon.classList.add('shining'); // Add the 'shining' class
        // Remove the 'shining' class after the animation duration
        setTimeout(() => {
            icon.classList.remove('shining');
        }, 2000); // Match this with the animation duration (2s)
    });
}

// Call the addShiningEffect every 7 seconds
setInterval(addShiningEffect, 3000);
