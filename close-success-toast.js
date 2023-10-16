 // Function to close the success toast
 function closeSuccessToast() {
    document.getElementById('success-toast').style.display = 'none';
  }

  // an event listener to the navigation items 
  const aboutNav = document.getElementById('about');
  const portNav = document.getElementById('portfolio');
  const contactNav = document.getElementById('contact');
  

    aboutNav.addEventListener('click', closeSuccessToast);
    portNav.addEventListener('click', closeSuccessToast);
    contactNav.addEventListener('click', closeSuccessToast);
  