const subButton = document.querySelector('#sub-btn');
const emailInput = document.querySelector('#email-input');

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(email);
}

function emailError() {
    const error = document.querySelector('#error-message');
    const errorText = "Valid Email Required";
    error.innerHTML = errorText;
    emailInput.style.borderColor = 'red';
}

subButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (isValidEmail(email)) {
        localStorage.setItem('email', email)
        window.location = window.location.href.replace("index.html", "success.html");
    } else {
        emailError()
    }
});

