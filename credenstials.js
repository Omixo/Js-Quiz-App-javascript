function signup() {
    // User se input values le rahe hain
    const fullName = document.getElementById('fullName').value;
    const emailId = document.getElementById('emailId').value;
    const password = document.getElementById('password').value;

    // Pehle ke error messages hata rahe hain
    clearErrors();

    // Check kar rahe hain ki sare fields fill hain ya nahi
    if (fullName && emailId && password) {
        // Email format check karne ke liye regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        let isValid = true;

        // Email format check kar rahe hain
        if (!emailPattern.test(emailId)) {
            displayError('emailId', 'Please enter a valid email address.');
            isValid = false;
        }

        // Password ki length kam se kam 6 characters honi chahiye
        if (password.length < 6) {
            displayError('password', 'Password must be at least 6 characters long.');
            isValid = false;
        }

        // Full name mein numbers nahi hone chahiye
        if (/\d/.test(fullName)) {
            displayError('fullName', 'Full name should not contain numbers.');
            isValid = false;
        }

        // Agar koi validation fail hota hai to function yahin stop ho jayega
        if (!isValid) return;

        // Pehle se registered users ko localStorage se fetch kar rahe hain
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check kar rahe hain ki email already registered hai ya nahi
        if (users.some(user => user.emailId === emailId)) {
            displayError('emailId', 'Email is already registered. Please log in.');
            return;
        }

        // Naya user object bana rahe hain
        const user = {
            id: Date.now(), // Unique ID generate kar rahe hain
            fullName: fullName,
            emailId: emailId,
            password: password
        };

        // Naye user ko users list me add kar ke localStorage me save kar rahe hain
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful! You can now log in.');
        window.location.href = 'login.html'; // Login page pe redirect kar rahe hain
    } else {
        // Agar koi field empty ho to error show karna
        displayError('fullName', 'Please fill in all fields.');
        displayError('emailId', 'Please fill in all fields.');
        displayError('password', 'Please fill in all fields.');
    }
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
