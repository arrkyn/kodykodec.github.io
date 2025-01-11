const aboutBorder = document.getElementById('about');
const contactBorder = document.getElementById('contact');
const topLight = document.querySelector('.top-light');


showContentContainer();

document.querySelector('.top-light svg').addEventListener('click', function() {
  var fixedFrame = document.querySelector('.fixed-frame');

  var aboutIsOpen = fixedFrame.classList.contains('open-about');
  var contactIsOpen = fixedFrame.classList.contains('open-contact');

  if (aboutIsOpen || contactIsOpen) {

      fixedFrame.classList.remove('open-about');
      fixedFrame.classList.remove('open-contact');

      aboutBorder.classList.remove('border-button');
      contactBorder.classList.remove('border-button');
      topLight.classList.remove("top-light-outline");

      //turn off all lines to those nav buttons
      lineTopLeft.classList.remove('light-up');
      lineTopRight.classList.remove('light-up');
      lineRightVert.classList.remove('light-up');
      lineLeftVert.classList.remove('light-up');
      lineBottomLeftAbout.classList.remove('light-up');
      lineBottomRightContact.classList.remove('light-up');

       //turn off battery
       energyIcon.classList.remove('light');
  
      showContentContainer();
  }
});


document.getElementById('about').addEventListener('click', function() {
  console.log('About clicked'); // Add this line
    var fixedFrame = document.querySelector('.fixed-frame');
    
    //check if the about window is already open
    var aboutIsOpen = fixedFrame.classList.contains('open-about');
    
    //toggle the about window
    if (!aboutIsOpen) {
      fixedFrame.classList.add('open-about');
      fixedFrame.classList.remove('open-contact');
  

      aboutBorder.classList.add('border-button');
      contactBorder.classList.remove('border-button');
      topLight.classList.add('top-light-outline'); 

      

      hideContentContainer();
      
    } else {
      fixedFrame.classList.remove('open-about');
      topLight.classList.remove('top-light-outline'); 
      aboutBorder.classList.remove('border-button');
      
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
     

      contactBorder.classList.add('border-button');
      aboutBorder.classList.remove('border-button');
      topLight.classList.add('top-light-outline'); 
     

      hideContentContainer();
      
    } else {
      fixedFrame.classList.remove('open-contact');
      contactBorder.classList.remove('border-button');
      topLight.classList.remove('top-light-outline'); 
    }
  });

  


  