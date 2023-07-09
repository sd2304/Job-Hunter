
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      var password1 = document.getElementById("password").value;
      var password2 = document.getElementById("password2").value;
      var passwordError = document.getElementById("passwordError");

      if (password1 !== password2) {
        event.preventDefault();
        event.stopPropagation();
        passwordError.textContent = "Passwords do not match";
        passwordError.classList.add("invalid-feedback");
      } else {
        passwordError.textContent = "";
        passwordError.classList.remove("invalid-feedback");
      }
      
      form.classList.add('was-validated')
    }, false)
  });
})
();

