function openCreateAccountModal() {
  document.getElementById('createAccountModal').style.display = 'block';
}

function closeCreateAccountModal() {
  document.getElementById('createAccountModal').style.display = 'none';
}

function createAccount(event) {
  event.preventDefault();

  // Get the username and password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Implement your account creation logic here
  // For example, send the data to a server using AJAX or fetch
  // Then close the modal box
  console.log('Creating account with username:', username, 'and password:', password);

  // Close the modal
  closeCreateAccountModal();
}
