
    function signup() {
        // Get input values
        const fullName = document.getElementById('fullName').value;
        const emailId = document.getElementById('emailId').value;
        const password = document.getElementById('password').value;

        // Check if all fields are filled
        if (fullName && emailId && password) {
            // Create a user object
            const user = {
                fullName: fullName,
                emailId: emailId,
                password: password
            };

            // Save user data in local storage
            localStorage.setItem('user', JSON.stringify(user));

            // Show a success message or redirect to the login page
            alert('Signup successful! You can now log in.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Please fill in all fields.');
        }
    }
 

  
    function login() {
        // Get input values
        const emailId = document.getElementById('emailId').value;
        const password = document.getElementById('password').value;

        // Retrieve the user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if the user exists and credentials match
        if (storedUser && storedUser.emailId === emailId && storedUser.password === password) {
            alert('Login successful!');
            // Redirect to the quiz or home page
            window.location.href = 'dashboard.html'; // Change to your desired page
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }


