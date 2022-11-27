const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
const firstErrorIcon = document.getElementById('firstErrorIcon');
const lastErrorIcon = document.getElementById('lastErrorIcon');
const emailErrorIcon = document.getElementById('emailErrorIcon');
const passwordErrorIcon = document.getElementById('passwordErrorIcon'); 
const firstError = document.getElementById('firstError');
const lastError = document.getElementById('lastError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError'); 


form.addEventListener("submit", (e) => {
    e.preventDefault();
} );
firstError.style.display = "none";  
lastError.style.display = "none";
emailError.style.display = "none";
passwordError.style.display = "none";

submitBtn.addEventListener("click", (e) => {
    let validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (firstName.value == "") {
        firstErrorIcon.style.display = "inline-block";
        firstError.style.display = "inline-block";
    }
    if (lastName.value == "") {
        lastErrorIcon.style.display = "inline-block";
        lastError.style.display = "inline-block";
    }
    if (!(email.value.match(validEmail))){
        emailError.textContent = "Looks like this is not an Email"
        emailErrorIcon.style.display = "inline-block";
        emailError.style.display = "inline-block";
    } 
    if (password.value == "") {
        passwordErrorIcon.style.display = "inline-block";
        passwordError.style.display = "inline-block";
    }
    setTimeout(() => {
        firstErrorIcon.style.display = "none";  
        lastErrorIcon.style.display = "none";
        emailErrorIcon.style.display = "none";
        passwordErrorIcon.style.display = "none";
        firstError.style.display = "none";  
        lastError.style.display = "none";
        emailError.style.display = "none";
        passwordError.style.display = "none";
      }, 2000);
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";

})

