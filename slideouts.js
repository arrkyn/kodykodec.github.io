const aboutBorder = document.getElementById('about');
const portfolioBorder = document.getElementById('portfolio');
const contactBorder = document.getElementById('contact');
const topLight = document.getElementById('top-light');

document.querySelector('.top-light svg').addEventListener('click', function() {
  var fixedFrame = document.querySelector('.fixed-frame');

  var aboutIsOpen = fixedFrame.classList.contains('open-about');
  var portfolioIsOpen = fixedFrame.classList.contains('open-portfolio');
  var contactIsOpen = fixedFrame.classList.contains('open-contact');

  if (aboutIsOpen || portfolioIsOpen || contactIsOpen) {

      fixedFrame.classList.remove('open-about');
      fixedFrame.classList.remove('open-contact');
      fixedFrame.classList.remove('open-portfolio');

      aboutBorder.classList.remove('border-light');
      contactBorder.classList.remove('border-light');
      portfolioBorder.classList.remove('border-light');

      //turn the all other lines to those navs 
      lineTopLeft.classList.remove('light-up');
      lineTopRight.classList.remove('light-up');
      lineRightVert.classList.remove('light-up');
      lineLeftVert.classList.remove('light-up');
      lineBottomLeftAbout.classList.remove('light-up');
      lineBottomRightContact.classList.remove('light-up');
      lineBottomLeftPortfolio.classList.remove('light-up');

       //turn off battery
       energyIcon.classList.remove('light');
  
      showContentContainer();
  }
});


document.getElementById('about').addEventListener('click', function() {
  console.log('About clicked'); // Add this line
    var fixedFrame = document.querySelector('.fixed-frame');
    
    // Check if the about window is already open
    var aboutIsOpen = fixedFrame.classList.contains('open-about');
    
    // Toggle the about window
    if (!aboutIsOpen) {
      fixedFrame.classList.add('open-about');
      fixedFrame.classList.remove('open-contact');
      fixedFrame.classList.remove('open-portfolio');

      aboutBorder.classList.add('border-light');
      contactBorder.classList.remove('border-light');
      portfolioBorder.classList.remove('border-light');
      
    } else {
      fixedFrame.classList.remove('open-about');

      aboutBorder.classList.remove('border-light');
      
    }
  });
  
  document.getElementById('contact').addEventListener('click', function() {
    var fixedFrame = document.querySelector('.fixed-frame');
    
    // Check if the contact window is already open
    var contactIsOpen = fixedFrame.classList.contains('open-contact');
    
    // Toggle the contact window
    if (!contactIsOpen) {
      fixedFrame.classList.add('open-contact');
      fixedFrame.classList.remove('open-about');
      fixedFrame.classList.remove('open-portfolio');

      contactBorder.classList.add('border-light');
      aboutBorder.classList.remove('border-light');
      portfolioBorder.classList.remove('border-light');
      
    } else {
      fixedFrame.classList.remove('open-contact');

      contactBorder.classList.remove('border-light');
    }
  });

  document.getElementById('portfolio').addEventListener('click', function() {
    var fixedFrame = document.querySelector('.fixed-frame');
    
    // Check if the about window is already open
    var aboutIsOpen = fixedFrame.classList.contains('open-portfolio');
    
    // Toggle the about window
    if (!aboutIsOpen) {
      fixedFrame.classList.add('open-portfolio');
      fixedFrame.classList.remove('open-about');
      fixedFrame.classList.remove('open-contact');
      
      portfolioBorder.classList.add('border-light');
      aboutBorder.classList.remove('border-light');
      contactBorder.classList.remove('border-light');
      
      
      
    } else {
      fixedFrame.classList.remove('open-portfolio');

      portfolioBorder.classList.remove('border-light');
    }
  });


  