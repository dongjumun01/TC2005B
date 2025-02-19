const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.getElementById('message');

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
        message.textContent = "Las contraseñas coinciden";
        message.className = "success";
    } else {
        message.textContent = "Las contraseñas no coinciden";
        message.className = "error";
    }
});