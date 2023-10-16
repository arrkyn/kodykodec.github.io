// Initialize the formSubmitted flag to false
let formSubmitted = false;

// Function to clear the form fields
function clearFormFields() {
  const inputFields = document.querySelectorAll('input, textarea');
  inputFields.forEach((field) => {
    field.value = '';
  });
}
//event listener for when contact is clicked 
document.getElementById('contact').addEventListener('click', function (event) {
    if (formSubmitted) {
      clearFormFields();
    }
  });
  

// Add an event listener for the contact form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Copy the fixed frame var to access the open-contact window
  var fixedFrame = document.querySelector('.fixed-frame');
  // Close the contact window
  fixedFrame.classList.remove('open-contact');

  // Display the success toast
  document.getElementById('success-toast').style.display = 'block';

  // Shut off the lights
  contactBorder.classList.remove('border-light');
  lineTopRight.classList.remove('light-up');
  lineRightVert.classList.remove('light-up');
  lineBottomRightContact.classList.remove('light-up');
  lightsContactOn = false;
  lightsAboutOn = false;
  lightsPortfolioOn = false;

  // Set the formSubmitted flag to true after successful submission
  formSubmitted = true;

  // Dispatch the custom event "successToastDisplayed"
  const successToastEvent = new Event('successToastDisplayed');
  document.dispatchEvent(successToastEvent);

  
});
