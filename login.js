document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('loginU');
  
    signInButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default button behavior
  
      // Redirect the user to the homepage
      window.location.href = 'index.html';
    });
  });