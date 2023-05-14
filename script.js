function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // First Name validation
    if (firstName == "") {
      document.getElementById("firstNameError").innerHTML = "Please enter your first name.";
      return false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      document.getElementById("firstNameError").innerHTML = "Please enter only letters for your first name.";
      return false;
    }
    
    // Last Name validation
    if (lastName == "") {
      document.getElementById("lastNameError").innerHTML = "Please enter your last name.";
      return false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      document.getElementById("lastNameError").innerHTML = "Please enter only letters for your last name.";
      return false;
    }
    
    // Email validation
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Please enter your email address.";
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
      return false;
    }
    
    // Phone validation
    if (phone == "") {
      document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
      return false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      document.getElementById("phoneError").innerHTML = "Please enter a 10-digit phone number.";
      return false;
    }
    
    // Password validation
    if (password == "") {
      document.getElementById("passwordError").innerHTML = "Please enter a password.";
      return false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
      return false;
    }
    
    // Confirm Password validation
    if (confirmPassword == "") {
      document.getElementById("confirmPasswordError").innerHTML = "Please confirm your password.";
      return false;
    } else if (password != confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
      return false;
    }
    
    return true;
  }  