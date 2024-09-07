//the lines below
const lineTopLeft = document.querySelector('.line-top-left');
const lineTopRight = document.querySelector('.line-top-right');
const lineLeftVert = document.querySelector('.line-left-vert');
const lineRightVert = document.querySelector('.line-right-vert');
const lineBottomLeftAbout = document.querySelector('.line-bottom-left-about');
const lineBottomLeftPortfolio = document.querySelector('.line-bottom-left-portfolio');
const lineBottomRightContact = document.querySelector('.line-bottom-right-contact');

const energyIcon = document.querySelector('svg');

const contentContainer = document.getElementById('content-container');

function hideContentContainer() {
    contentContainer.style.display = 'none';
}

function showContentContainer() {
    contentContainer.style.display = 'flex';
}


// Initialize variables to track the state of the lights for each nav item
let lightsAboutOn = false;
let lightsPortfolioOn = false;
let lightsContactOn = false;

document.getElementById('about').addEventListener('click', function() {

    if(lightsPortfolioOn || lightsContactOn) { //if any other lights are on
        // turn off all other lights other than 'about'
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        //turn on lights to 'about'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');

         //turn on battery
         energyIcon.classList.add('light');
       
        //trigger booleans 
        lightsAboutOn = true;
        lightsPortfolioOn = false;
        lightsContactOn = false;

        hideContentContainer();

    } else if(!lightsAboutOn) { //if light to about are off
         // Turn the lights on for 'about'
         lineTopLeft.classList.add('light-up');
         lineLeftVert.classList.add('light-up');
         lineBottomLeftAbout.classList.add('light-up');

        //turn on battery
         energyIcon.classList.add('light');

        //trigger booleans 
        lightsAboutOn = true;
        lightsPortfolioOn = false;
        lightsContactOn = false;

        hideContentContainer();

    } else if (lightsAboutOn) { //if light to about is on
        // Turn the lights off for 'about'
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');

        //turn all other lights to navs
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');

         //turn off battery
         energyIcon.classList.remove('light');
    
        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;

        showContentContainer();
    }
});

document.getElementById('portfolio').addEventListener('click', function() {

    if(lightsAboutOn || lightsContactOn) { //if any other lights are on
        // turn off all other lights other than 'portfolio'
        lineBottomRightContact.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        //turn on lights to 'portfolio'
        lineTopLeft.classList.add('light-up');
        lineLeftVert.classList.add('light-up');
        lineBottomLeftAbout.classList.add('light-up');
        lineBottomLeftPortfolio.classList.add('light-up');

          //turn on battery
          energyIcon.classList.add('light');

        //trigger booleans 
        lightsAboutOn = false;
        lightsPortfolioOn = true;
        lightsContactOn = false;

        hideContentContainer();

    } else if(!lightsPortfolioOn) { //if lights to portfolio are off
         // Turn the lights on for 'portfolio'
         lineTopLeft.classList.add('light-up');
         lineLeftVert.classList.add('light-up');
         lineBottomLeftAbout.classList.add('light-up');
         lineBottomLeftPortfolio.classList.add('light-up');

           //turn on battery
           energyIcon.classList.add('light');

        //trigger booleans 
        lightsAboutOn = false;
        lightsPortfolioOn = true;
        lightsContactOn = false;

        hideContentContainer();

    } else if (lightsPortfolioOn) { //if lights to portfolio is on
        // Turn the lights off for 'portfolio'
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');
        //turn all other lights to navs
        lineBottomRightContact.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');

        //turn off battery
        energyIcon.classList.remove('light');
    
        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;

        showContentContainer();
    }
});

document.getElementById('contact').addEventListener('click', function() {

    if(lightsAboutOn || lightsPortfolioOn) { //if any other lights are on
        // turn off all other lights other than 'contact'
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');
        //turn on lights to 'contact'
        lineTopRight.classList.add('light-up');
        lineRightVert.classList.add('light-up');
        lineBottomRightContact.classList.add('light-up');

          //turn on battery
          energyIcon.classList.add('light');

        //trigger booleans 
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = true;

        hideContentContainer();

        } else if(!lightsContactOn) { //if lights to contact are off
         // Turn the lights on for 'contact'
         lineTopRight.classList.add('light-up');
         lineRightVert.classList.add('light-up');
         lineBottomRightContact.classList.add('light-up');

           //turn on battery
           energyIcon.classList.add('light');

        //trigger booleans 
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = true;

        hideContentContainer();

    } else if (lightsContactOn) { //if lights to contact are on
        // Turn the lights off for 'contact'
        lineTopRight.classList.remove('light-up');
        lineRightVert.classList.remove('light-up');
        lineBottomRightContact.classList.remove('light-up');
        //turn all other lights to navs
        lineBottomLeftPortfolio.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        //turn the all other lines to those navs 
        lineTopLeft.classList.remove('light-up');
        lineLeftVert.classList.remove('light-up');
        lineBottomLeftAbout.classList.remove('light-up');
        lineBottomLeftPortfolio.classList.remove('light-up');

         //turn off battery
         energyIcon.classList.remove('light');
    
        // Reset the state of lights for other nav items
        lightsAboutOn = false;
        lightsPortfolioOn = false;
        lightsContactOn = false;

        showContentContainer();
    }
});



