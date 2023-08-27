const dismissButton = document.querySelector('#dismiss-btn');
const emailText = document.querySelector('strong')
const email = localStorage.getItem('email');

emailText.innerText = email;

dismissButton.addEventListener('click', () => {
    window.location = window.location.href.replace("success.html","index.html");
});

