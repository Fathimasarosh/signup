document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errorDisplay = document.getElementById('loginError');
  const welcomeMsg = document.getElementById('welcomeMsg');

  const storedUser = localStorage.getItem(username);
  if (!storedUser) {
    errorDisplay.textContent = "Username does not exist.";
    return;
  }

  const user = JSON.parse(storedUser);

  if (user.password !== password) {
    errorDisplay.textContent = "Incorrect password.";
    return;
  }

  errorDisplay.textContent = "";
  welcomeMsg.textContent = `Welcome, ${user.firstName}!`;
});
