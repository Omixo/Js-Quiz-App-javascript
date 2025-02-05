function signup() {
    // Get input values
    const fullName = document.getElementById('fullName').value;
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;
    const termsCheckbox = document.getElementById('terms');
  
    // Clear previous error messages
    clearErrors();
  
    // Basic input validation
    if (!fullName || !emailId || !password) {
      displayError('fullName', 'Please fill in all fields.');
      displayError('emailId', 'Please fill in all fields.');
      displayError('password', 'Please fill in all fields.');
      return;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailId)) {
      displayError('emailId', 'Please enter a valid email address.');
      return;
    }
  
    // Password validation (simplified)
    if (password.length < 8) {
      displayError('password', 'Password must be at least 8 characters long.');
      return;
    }
  
    // Check if terms are accepted
    if (!termsCheckbox.checked) {
      alert('Please accept the Terms and Conditions.');
      return;
    }
  
    // Check if email is already registered
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.emailId === emailId)) {
      displayError('emailId', 'Email is already registered. Please log in.');
      return;
    }
  
    // Create new user object
    const newUser = {
      id: Date.now(),
      fullName: fullName,
      emailId: emailId,
      password: password
    };
  
    // Add new user to localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
  }
  
  function displayError(inputId, message) {
    const errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = message;
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(error => error.textContent = '');
  }

function login() {
    // User se input values le rahe hain
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;

    // Pehle ke error messages hata rahe hain
    clearErrors();

    // Check kar rahe hain ki sare fields bharay gaye hain ya nahi
    if (!emailId || !password) {
        if (!emailId) displayError('emailId', 'Please fill in this field.');
        if (!password) displayError('password', 'Please fill in this field.');
        return;
    }

    // Email format sahi hai ya nahi ye check kar rahe hain
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailId)) {
        displayError('emailId', 'Please enter a valid email address.');
        return;
    }

    // LocalStorage se sare users ko retrieve kar rahe hain
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // User ko find kar rahe hain jo diye gaye email aur password se match kare
    const user = users.find(u => u.emailId === emailId && u.password === password);

    if (user) {
        // Login hone wale user ko localStorage me save kar rahe hain
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Dashboard page pe redirect kar rahe hain
    } else {
        displayError('emailId', 'Invalid email or password. Please try again.');
    }
}

// Yeh function error message ko input field ke neeche show karega
function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.innerText = message;

    // Error message ko input field ke just neeche dikhana
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

// Yeh function pehle ke error messages ko clear karega
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((error) => error.remove());
}
