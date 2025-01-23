let passInput = document.getElementById('password');
let text = document.getElementById('text');
let strengthBar = document.getElementById('strength-bar');
passInput.addEventListener('input', function(event) {
    let password = event.target.value;
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    let gradientColor = strength <= 1 ? '#ff0000' : (strength <= 3 ? '#ff9800' : '#12ff12');
    let strengthText = strength <= 1 ? 'Weak' : (strength <= 3 ? 'Medium' : 'Strong');
    switch (strength) {
        case 0:
        case 1:
            strengthBar.style.background = 'conic-gradient(#ff0000, #ff0000)';
            break;
        case 2:
        case 3:
            strengthBar.style.background = 'conic-gradient(#ff9800, #ff9800)';
            break;
        case 4:
            strengthBar.style.background = 'conic-gradient(#12ff12, #12ff12)';
            break;
    }
    text.textContent = strengthText;
    text.style.color = gradientColor;
});
