const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs() {
    // Get the values from the inputs
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();


// First Name
   if(firstNameValue === '') {
    // Show error and add error class
    setErrorFor(firstName, 'First Name cannot be blank');
   } 
   else {
    // Add success class
    setSuccessFor(firstName);
   }


// Last Name
   if(lastNameValue === '') {
    // Show error and add error class
    setErrorFor(lastName, 'Last Name cannot be blank');
   } 
   else {
    // Add success class
    setSuccessFor(lastName);
   }


// Email
   if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
   }
   else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
   }
   else {
    setSuccessFor(email);
   }


//    Password
   if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
   } else if (passwordValue.length <= 2){
    setErrorFor(password, 'Password must be more than 2 characters');
   }
   else {
    setSuccessFor(password);
   }

//    Show success message
}


function setErrorFor(input, message) {
    const inputGroup = input.parentElement; // .input-grp
    const small = inputGroup.querySelector('small');

    // Add error message inside small tag
    small.innerText = message;

    // Add error class (red exclamation icon and red border)
    inputGroup.className = 'input-grp error';
}


function setSuccessFor (input){
    const inputGroup =input.parentElement;
    inputGroup.className = 'input-grp success'
}


function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}