function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
    return reg.test(email);
  }

  document.getElementById('contactmeForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    if (!validateEmail(email.value)) {
      // If the email is invalid, show error message and change border color
      emailError.style.display = 'block';
      email.style.borderBottom = "3px solid rgb(156, 52, 52)";  // Set red border
      event.preventDefault(); // Prevent form submission
    } else {
      // If the email is valid, reset the border color and hide the error message
      emailError.style.display = 'none';
      email.style.borderBottom = "3px solid var(--color-white)";  // Reset to original color
    }
  });