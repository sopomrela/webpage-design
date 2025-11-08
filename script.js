document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullname').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const message = document.getElementById('message');

    if (!fullName || !username || !email || !password || !confirm) {
        message.textContent = "All fields are required!";
        message.style.color = "red";
        return;
    }

    if (!email.includes('@')) {
        message.textContent = "Invalid email address!";
        message.style.color = "red";
        return;
    }

    if (password !== confirm) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    message.textContent = `Welcome, ${fullName}! Your account has been created.`;
    message.style.color = "green";
    document.getElementById('registerForm').reset();
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const pwd = document.getElementById('password');
    const type = pwd.type === 'password' ? 'text' : 'password';
    pwd.type = type;
    this.textContent = type === 'password' ? '👁' : '🙈';
});
