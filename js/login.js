
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    // check email and password
    if (userEmail == 'pola@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})