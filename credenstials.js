function signup() {
    // Get input values
    const fullName = document.getElementById('fullName').value;
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    clearErrors();

    // Check if all fields are filled
    if (fullName && emailId && password) {
        // Hard-coded validation checks
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
        let isValid = true;

        if (!emailPattern.test(emailId)) {
            displayError('emailId', 'Please enter a valid email address.');
            isValid = false;
        }

        if (password.length < 6) {
            displayError('password', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        if (/\d/.test(fullName)) {
            displayError('fullName', 'Full name should not contain numbers.');
            isValid = false;
        }

        if (!isValid) return; // Stop execution if there are validation errors

        // Retrieve existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email is already registered
        if (users.some(user => user.emailId === emailId)) {
            displayError('emailId', 'Email is already registered. Please log in.');
            return;
        }

        // Create a unique user object
        const user = {
            id: Date.now(), // Unique ID for each user
            fullName: fullName,
            emailId: emailId,
            password: password
        };

        // Add the user to the array and save in localStorage
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        displayError('fullName', 'Please fill in all fields.');
        displayError('emailId', 'Please fill in all fields.');
        displayError('password', 'Please fill in all fields.');
    }
}

function login() {
    // Get input values
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    clearErrors();

    // Check if all fields are filled
    if (!emailId || !password) {
        if (!emailId) displayError('emailId', 'Please fill in this field.');
        if (!password) displayError('password', 'Please fill in this field.');
        return;
    }

    // Hard-coded validation checks for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    if (!emailPattern.test(emailId)) {
        displayError('emailId', 'Please enter a valid email address.');
        return;
    }

    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with matching credentials
    const user = users.find(u => u.emailId === emailId && u.password === password);

    if (user) {
        // Save the logged-in user to sessionStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        displayError('emailId', 'Invalid email or password. Please try again.');
    }
}

// Function to display error messages below the input fields
function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'red';
    errorElement.innerText = message;

    // Insert the error message after the input field
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

// Function to clear previous error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((error) => error.remove());
}