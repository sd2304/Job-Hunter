const registerLink = document.getElementById('register-link');

// Add a click event listener to the link
registerLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Redirect the user to the registration page
  window.location.href = 'registration.html';
});

document.addEventListener('DOMContentLoaded', function() {
  var loginElement = document.getElementById('login');

  loginElement.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Redirect the user to the login page
    window.location.href = 'login.html';
  });
});
