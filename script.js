// add a click evetn to the submit button and prevent it from refreshing the page
// Note - buttons in forms will always try to refresh the page
// all event have a trigger - what was intereacted with = event.target

// Getting the values from the user input 

// Get the elements/inputs:
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const contactPhoneInput = document.getElementById('phone');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const genderInput = document.getElementById('gender');
const experienceInput = document.getElementById('experience');
const sessionsInput = document.getElementById('workshop');

// get the results div
const results = document.getElementById('results');

const confirmButton = document.getElementById('confirmBtn');

confirmButton.addEventListener('click', function (event) {
    event.preventDefault();
    let userData = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        contactPhone: contactPhoneInput.value,
        age: ageInput.value,
        email: emailInput.value,
        gender: genderInput.value,
        experience: experienceInput.value,
        sessions: sessionsInput.value
    }

    console.log(userData);
    populateResults(userData);
});

function populateResults(userData) {
    results.innerHTML = `
        <h2>${userData.firstname} ${userData.lastname} ${userData.age}</h2>
        <h4>${userData.contactPhone} </h4>
        <h4>${userData.email}</h4>
        <p>${userData.genderInput}</p>
        <p>${userData.sessionsInput}</p>
        <p>${userData.experienceInput}</p>
    `
};

let confirm = document.getElementById('confirmBtn');

let resultsDiv = document.getElementById('resultsSection');

let confirmationPage = document.getElementById('confirmation')

const showResults = (result, confirmationPopup) => {
    resultsDiv.style.display = result;
    confirmationPage.style.display = confirmationPopup;
};

confirm.addEventListener('click', () => showResults("flex", "flex"));