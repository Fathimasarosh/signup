document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorDisplay = document.getElementById('signupError');

  if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
    errorDisplay.textContent = "All fields are required.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDisplay.textContent = "Invalid email format.";
    return;
  }

  if (password !== confirmPassword) {
    errorDisplay.textContent = "Passwords do not match.";
    return;
  }

  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    errorDisplay.textContent = "Password must contain at least one special character.";
    return;
  }

  const user = {
    firstName,
    lastName,
    email,
    username,
    password
  };

  localStorage.setItem(username, JSON.stringify(user));
  alert("Sign-up successful! Please log in.");
  window.location.href = "login.html";
});
