window.addEventListener('resize', alignLineToAbout);
window.addEventListener('DOMContentLoaded', alignLineToAbout);


function alignLineToAbout() {
    const lineLeftVert = document.querySelector('.line-left-vert');
    const lineBottomLeftAbout = document.querySelector('.line-bottom-left-about');
    const about = document.getElementById('about');

    if (lineLeftVert && lineBottomLeftAbout && about) {
        // Get the right edge of the line-left-vert
        const lineLeftVertRect = lineLeftVert.getBoundingClientRect();
        const aboutRect = about.getBoundingClientRect();

        // Calculate distance between the right edge of .line-left-vert and the left edge of #about
        const distance = aboutRect.left - lineLeftVertRect.left;

        // Update the width of .line-bottom-left-about
        lineBottomLeftAbout.style.width = `${distance}px`;
    }
}

window.addEventListener('resize', alignLineToContact);
window.addEventListener('DOMContentLoaded', alignLineToContact);


function alignLineToContact() {
    const lineRightVert = document.querySelector('.line-right-vert');
    const lineBottomRightContact = document.querySelector('.line-bottom-right-contact');
    const contact = document.getElementById('contact');

    if (lineRightVert && lineBottomRightContact && contact) {
        // Get the left edge of the contact and the right edge of the line-right-vert
        const lineRightVertRect = lineRightVert.getBoundingClientRect();
        const contactRect = contact.getBoundingClientRect();

        // Calculate distance between the right edge of .line-right-vert and the right edge of #contact
        const distance = contactRect.right - lineRightVertRect.right;

        // Update the width of .line-bottom-right-contact
        lineBottomRightContact.style.width = `${Math.abs(distance)}px`;
    }
}



