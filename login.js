function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function login(event) {
  event.preventDefault();

  // Get the username and password
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Implement your login logic here
  // For example, send the data to a server using AJAX or fetch
  // Then close the modal box
  console.log('Logging in with username:', username, 'and password:', password);

  // Close the modal
  closeLoginModal();
}

function switchToCreateAccount() {
  closeLoginModal();
  openCreateAccountModal();
}

function switchToLogin() {
  closeCreateAccountModal();
  openLoginModal();
}
