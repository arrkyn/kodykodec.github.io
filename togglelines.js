//the lines below
const lineTopLeft = document.querySelector('.line-top-left');
const lineTopRight = document.querySelector('.line-top-right');
const lineLeftVert = document.querySelector('.line-left-vert');
const lineRightVert = document.querySelector('.line-right-vert');
const lineBottomLeftAbout = document.querySelector('.line-bottom-left-about');
const lineBottomLeftPortfolio = document.querySelector('.line-bottom-left-portfolio');
const lineBottomRightContact = document.querySelector('.line-bottom-right-contact');

//const aboutBorder = document.querySelector('.border-light-up');


// Initialize variables to track the state of the lights for each nav item
let lightsAboutOn = false;
let lightsPortfolioOn = false;
let lightsContactOn = false;

document.getElementById('about').addEventListener('click', function() {
    
    if(lightsPortfolioOn) { 
        lineBottomLeftPortfolio.classList.remove('light-up');
         // Turn the lights off for 'contact'
         lineTopRight.classList.remove('light-up');
         lineRightVert.classList.remove('light-up');
         lineBottomRightContact.classList.remove('light-up');

        lightsPortfolioOn = false;
        lightsContactOn = false;
    } else if (!lightsAboutOn) { //if about is off
        // Turn the lights on for 'about'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');

        lightsAboutOn = true;
        // Turn the lights off for 'contact'
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        lightsContactOn = false;
    } else { 
        // Turn the lights off for 'about'
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');

        // Turn the lights off for other nav items
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;
    }
});

document.getElementById('portfolio').addEventListener('click', function() {
    if(lightsAboutOn) { 
        lineBottomLeftPortfolio.classList.add('light-up');
         // Turn the lights off for 'contact'
         lineTopRight.classList.remove('light-up');
         lineRightVert.classList.remove('light-up');
         lineBottomRightContact.classList.remove('light-up');
         
        lightsPortfolioOn = true;
        lightsContactOn = false;
    } else if (!lightsPortfolioOn) { // if portfolio is off
        // Turn the lights on for 'portfolio'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');
        lineBottomLeftPortfolio.classList.add('light-up')

         // Turn the lights off for 'contact'
         lineTopRight.classList.remove('light-up');
         lineRightVert.classList.remove('light-up');
         lineBottomRightContact.classList.remove('light-up');
        
        lightsPortfolioOn = true;
    } else { 
        // Turn the lights off for 'portfolio'
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');
       
        // Turn the lights off for other nav items
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
       
        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;
    }
});

document.getElementById('contact').addEventListener('click', function() {
    if (!lightsContactOn) { // if contact is off
        // Turn the lights on for 'contact'
        lineTopRight.classList.add('light-up');
        lineRightVert.classList.add('light-up');
        lineBottomRightContact.classList.add('light-up');

        lightsContactOn = true;
        // Turn the lights off for other nav items
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');
       
        lightsAboutOn = false;
        lightsPortfolioOn = false;
    } else { 
        // Turn the lights off for 'contact'
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
       
        // Turn the lights off for other nav items
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;
    }
});







