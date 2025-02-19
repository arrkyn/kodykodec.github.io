// Select elements
const introSlide = document.querySelector(".intro-slide");
const selectionSlide = document.querySelector(".selection-slide");
const finalSlide = document.querySelector(".final-slide");
const finalThanks = document.querySelector(".final-thanks");
const startButton = document.querySelector(".start-btn");
const submitButton = document.querySelector(".submit-btn");
const backButton = document.querySelector(".back-btn");
const submitResultsButton = document.querySelector(".submit-results-btn");
const assetContainer = document.querySelector(".asset-container");

const participantName = document.getElementById("user-name");
const inviteCode = document.getElementById("invite-code");
const comments = document.getElementById("comments");
const detailsEntered = false;

// Variables to track choices and state
let userChoices = []; // Stores choice history
const userPath = []; // Stores full decision path (e.g., "A1-2") for data tracking
let userChoice = ''; // Tracks the latest choice
let choiceNumber = 1; // Start from Group 1
let totalSlides = 4;

const radioButtons = document.querySelectorAll('input[type="radio"]'); 


async function sendDataToGoogleSheets(data) {
    const gAppsUrl = "https://script.google.com/macros/s/AKfycbxCfX-wXlLs8erVhvujWAzVVBw3n6f5UPKgjwkI4L7dfXz7-J_cMuzdaGlL1Frpa8Ec/exec";

    try {
        let payload = JSON.stringify(data);
        const response = await fetch(gAppsUrl, {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload
        });
        
        if (response && response.success === 'true') {
            console.log("Success:", result);
        }
        
    } catch (error) {
        console.error("Error:", error);
    }
}


// Custom date formatting with 12-hour format and AM/PM
const getTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12

    return `${month}-${day}-${year} ${hours}:${minutes} ${amPm}`;
};

const userData = {
    time: getTime(),
    name: participantName,
    invitecode: inviteCode,
    finalchoice: userChoice,
    comments: comments,

};


//stricly for testing 
/* window.addEventListener("load", () => {
    introSlide.classList.add("hide-choices");
    selectionSlide.classList.add("hide-choices"); 
    finalSlide.classList.remove("hide-choices");
    finalSlide.classList.remove("hidden");
}); */

// Hide selection and final slides initially
document.addEventListener("DOMContentLoaded", () => {
    selectionSlide.classList.add("hide-choices");
    finalSlide.classList.add("hide-choices");
    finalThanks.classList.add("hide-choices");
});

const errorMessage = document.getElementById("error-message");

startButton.addEventListener("click", () => {
    const nameValid = participantName.value.trim() !== "";
    const inviteCodeValid = validateCode(inviteCode.value.trim());

    if (nameValid && inviteCodeValid) {
        introSlide.classList.add("hide-choices"); // Hide intro slide
        errorMessage.style.display = "none"; // Hide error if successful
        errorMessage.classList.remove("shake-error"); // Remove shake class if it was applied
        selectionSlide.classList.remove("hide-choices");

        userData.name = participantName.value;
        userData.invitecode = inviteCode.value;
    } else {
        // Determine the error message dynamically
        if (!nameValid) {
            errorMessage.textContent = "Please enter a name to proceed.";
        } else if (!inviteCodeValid) {
            errorMessage.textContent = "Invite code can't exceed 6 digits. Numbers only.";
        }

        if (errorMessage.style.display === "block") {
            // If the error is already visible, add a "shake" effect
            errorMessage.classList.add("shake-error");

            // Remove shake effect after animation duration (0.5s)
            setTimeout(() => {
                errorMessage.classList.remove("shake-error");
            }, 500);
        } else {
            // First time: just display the error message
            errorMessage.style.display = "block";
        }
    }
});

// Validate if the invite code is empty or less than 6
function validateCode(code) {
    if (code === "") return true; // Allow blank input
    return /^\d{1,6}$/.test(code); // Allows 1 to 6 digits
}


// Submit Results Button
submitResultsButton.addEventListener("click", () => {
    selectionSlide.classList.add("hide-choices");
    finalSlide.classList.add("hide-choices");
    finalThanks.classList.remove("hide-choices");
    userData.comments = comments.value
    userData.finalchoice = userChoice
    console.log(userData)
    console.log(JSON.stringify(userData))
    sendDataToGoogleSheets(userData);
});



toggleBackButton(choiceNumber);

// Listener for submit button
document.querySelector(".submit-btn").addEventListener("click", () => {
    // Check if any asset is highlighted (selected)
    const isAssetSelected = document.querySelector(".highlight") !== null;
   
    if (isAssetSelected) {
        nextChoice(userChoice);  // You can pass the user choice as usual
    } else {
        alert("Please choose a selection first.");
    }
    resetSelection();
    toggleBackButton(choiceNumber);
});

// Listener for back button
document.querySelector(".back-btn").addEventListener("click", () => {
    prevChoice();
    resetSelection();
    toggleBackButton(choiceNumber);
});





// Function to reset the assets and radio buttons
function resetSelection() {
    // Remove highlight class from asset A and B
    const assetA = document.querySelector(".asset-a");
    const assetB = document.querySelector(".asset-b");
    assetA.classList.remove("highlight");
    assetB.classList.remove("highlight");

    // Uncheck the radio buttons
    const radBtnA = document.getElementById("rad-a");
    const radBtnB = document.getElementById("rad-b");
    radBtnA.checked = false;
    radBtnB.checked = false;
}

// Listener for radio buttons and assets
const elements = document.querySelectorAll(".asset-a, .asset-b, #rad-a, #rad-b");
elements.forEach((element) => {
    element.addEventListener("click", () => highlightChoice(element));
});

// Function to hide or show the back button based on the slide number
function toggleBackButton(choiceNumber) {
    if (choiceNumber === 1) {
        backButton.style.display = "none"; // Hide back button on slide 1
    } else {
        backButton.style.display = "block"; // Show back button on other slides
    }
}

// Function to highlight choice and select radio buttons
function highlightChoice(element) {
    const radBtnA = document.getElementById("rad-a");
    const radBtnB = document.getElementById("rad-b");
    const assetA = document.querySelector(".asset-a");
    const assetB = document.querySelector(".asset-b");

    // Remove highlight from all choices
    document.querySelectorAll(".asset-a, .asset-b").forEach((el) => {
        el.classList.remove("highlight");
    });

    // If an asset is clicked, check the corresponding radio button
    if (element.classList.contains("asset-a") || element.id === "rad-a") {
        radBtnA.checked = true;
        radBtnB.checked = false;
        assetA.classList.add("highlight");
        userChoice = decodeURIComponent((element.querySelector("img")?.src || element.src).split("/").pop());
        console.log("choice a file is now selected " + userChoice);
    } else if (element.classList.contains("asset-b") || element.id === "rad-b") {
        radBtnA.checked = false;
        radBtnB.checked = true;
        assetB.classList.add("highlight");
        userChoice = decodeURIComponent((element.querySelector("img")?.src || element.src).split("/").pop());
        console.log("choice a file is now selected " + userChoice);
    }
}



// Present new choices dynamically
function presentNewChoices() {
    console.log("presentNewChoices() called with userChoice:", userChoice); // Check if nextChoice is called
    const choiceA = document.getElementById("choice-a"); // Asset A image
    const choiceB = document.getElementById("choice-b"); // Asset B image
    const finalChoice = document.getElementById("final-img"); // final choice image 
    const choicesContainer = document.querySelector(".asset-container");

    choicesContainer.classList.add("fade-out");
    choicesContainer.classList.add("hidden");

    setTimeout(() => {
        // Hide images before transition
        choicesContainer.classList.remove("fade-out");
        choicesContainer.classList.remove("hidden");

        submitButton.disabled = false; // Re-enable after transition
    }, 1000);

    setTimeout(() => {
        let nextSlide = choiceNumber; // Move to next group
        let choicePart;

        if (nextSlide === 1) {
            choiceA.src = '/survey/res/Group 1-A.png';  
            choiceB.src = `/survey/res/Group 1-B.png`;
        } else if (nextSlide === 2) {
            console.log("if block slide 2 is called choicePart = ", choicePart);
            choicePart = userChoice.split('-').pop().split('.')[0]; // Get last part and remove the file extension
            if (choicePart === 'A') {
                choiceA.src = `/survey/res/Group 2-A1.png`;
                choiceB.src = `/survey/res/Group 2-A2.png`;
            } else if (choicePart === 'B') {
                choiceA.src = `/survey/res/Group 2-B1.png`;
                choiceB.src = `/survey/res/Group 2-B2.png`;
            }
        } else if (nextSlide === 3) {
            choicePart = userChoice.split('-').pop().split('.')[0];
            console.log("choice part for slide 3 = " + choicePart);
            if (choicePart === 'A1' || choicePart === 'A2') {
                choiceA.src = `/survey/res/Group 3-${choicePart}-1.png`;
                choiceB.src = `/survey/res/Group 3-${choicePart}-2.png`;
            } else if (choicePart === 'B1' || choicePart === 'B2') {
                choiceA.src = `/survey/res/Group 3-${choicePart}-1.png`;
                choiceB.src = `/survey/res/Group 3-${choicePart}-2.png`;
            }
        } else if (nextSlide === 4) {

            finalChoice.src = `/survey/res/${userChoice}`;
            selectionSlide.classList.add("hide-choices");
            finalSlide.classList.remove("hide-choices");
            // Ensure final slide elements are visible
            finalSlide.classList.remove("hidden");
            finalChoice.classList.add("highlight");
        }

        // Re-enable the submit button and radio buttons after fade-in effect
        setTimeout(() => {
            submitButton.disabled = false;
            radioButtons.forEach(rb => rb.disabled = false);
        }, 100); // Delay matches the transition duration

    }, 1000); // Matches fade-out transition

    // Increment progress bar
    const progressBar = document.querySelector(".range__label");

    // Reset the progress bar to 0% when currentSlide is 1
    if (choiceNumber === 1) {
        progressBar.style.width = '0%';
    } else {
        // Update progress bar based on current progress
        progressBar.style.width = `${(choiceNumber / totalSlides) * 100}%`;
    }

}


// Next choice
function nextChoice(choice) {
    console.log("nextChoice before push User Choices Log:", userChoices);
    userChoices.push(choice); // Store the choice

    if (choiceNumber < totalSlides) {
        choiceNumber++;
    }

    console.log("nextChoice after push User Choices Log:", userChoices);
    resetSelection();
    toggleBackButton(choiceNumber);
    presentNewChoices();
}

// Previous choice
function prevChoice() {
    if (choiceNumber > 1) {
        choiceNumber--; // Decrement first
        userChoice = userChoices[choiceNumber - 1] || ''; // Ensure valid value
    }

    console.log("prevChoice after pop User Choices Log:", userChoices);
    toggleBackButton(choiceNumber);
    presentNewChoices();
}




