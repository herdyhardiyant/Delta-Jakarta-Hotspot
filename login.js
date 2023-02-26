const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const loginBackdrop = document.getElementById('login-backdrop');


loginButton.addEventListener('click', () => {

    loginModal.hidden = false;

});

loginBackdrop.addEventListener('click', () => {

    loginModal.hidden = true;

});