document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get input values
  var usernameInput = document.getElementById('text1').value.trim();
  var emailInput = document.getElementById('text2').value.trim();

  // Check if the provided credentials match Hyperbyte username and email
  if (usernameInput === 'Hyperbyte' && emailInput === 'hyperbyte@123') {
    alert('Success! Login Successful for Hyperbyte');
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
