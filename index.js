var users = ['muzammil@gmail.com', 'muddassir@gmail.com'];

var form = document.getElementById('loginForm');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var errorMsg = document.getElementById('errorMsg');

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove('d-none');
}

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    errorMsg.classList.add('d-none');

    if (email === '' || password === '') {
        showError('Please enter both email and password.');
        return;
    }

    if (users.includes(email)) {
        window.location.href = 'studentdashboard.html';
    } else {
        showError('User not found! Enter correct email');
    }
});
