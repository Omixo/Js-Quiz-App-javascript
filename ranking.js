function displayRankings() {
    // Retrieve quiz results and logged-in user from localStorage
    const quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Debug logging
    console.log("Total Quiz Results:", quizResults);
    console.log("Logged-in User:", loggedInUser);

    // Validate and sort results
    if (!Array.isArray(quizResults)) {
        console.error("Quiz results is not an array");
        return;
    }

    // Sort results in descending order based on score
    const sortedResults = quizResults.sort((a, b) => b.score - a.score);

    // Get ranking element references
    const firstNameEl = document.getElementById('firstName');
    const firstScoreEl = document.getElementById('first');
    const secondNameEl = document.getElementById('secondName');
    const secondScoreEl = document.getElementById('second');
    const thirdNameEl = document.getElementById('thirdName');
    const thirdScoreEl = document.getElementById('third');
    const otherUsersContainer = document.querySelector('.other-users-container');
    const rankHeading = document.getElementById('rank-heading');
    const rankDescription = document.getElementById('rank');

    // Validate element existence
    if (!firstNameEl || !firstScoreEl || !otherUsersContainer) {
        console.error("Ranking elements not found in the DOM");
        return;
    }

    // Clear previous rankings
    otherUsersContainer.innerHTML = '';

    // Display top 3 ranks with safety checks
    if (sortedResults.length > 0) {
        firstNameEl.innerText = sortedResults[0].fullName || 'N/A';
        firstScoreEl.innerText = sortedResults[0].score || 0;
    }

    if (sortedResults.length > 1) {
        secondNameEl.innerText = sortedResults[1].fullName || 'N/A';
        secondScoreEl.innerText = sortedResults[1].score || 0;
    }

    if (sortedResults.length > 2) {
        thirdNameEl.innerText = sortedResults[2].fullName || 'N/A';
        thirdScoreEl.innerText = sortedResults[2].score || 0;
    }

    // Find logged-in user's rank and score
    if (loggedInUser) {
        const userRank = sortedResults.findIndex(result => 
            result.fullName === loggedInUser.fullName
        );

        if (userRank !== -1) {
            const userScore = sortedResults[userRank].score;
            
            // Update rank heading and description
            rankHeading.innerText = `Wow You Rank ${userRank + 1}st`;
            rankDescription.innerText = `You scored ${userScore} points`;
        }
    }

    // Display ranks 4 onwards
    sortedResults.slice(3).forEach((user, index) => {
        if (!user) return; // Skip if user is undefined

        const userDiv = document.createElement('div');
        userDiv.className = 'other-user';

        userDiv.innerHTML = `
            <div class="other-user-rank">#${index + 4}</div>
            <div class="other-user-name">${user.fullName || 'Unknown'}</div>
            <div class="other-user-score">${user.score || 0}</div>
        `;

        otherUsersContainer.appendChild(userDiv);
    });

    // Logout functionality
    window.logout = function() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
    };

    // Profile dropdown toggle
    const profilePhoto = document.getElementById('profile-photo');
    const popupContainer = document.getElementById('popup-container');

    document.addEventListener('click', function(event) {
        if (!profilePhoto.contains(event.target)) {
            profilePhoto.classList.remove('active');
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayRankings); 







// Add event listener for profile photo to toggle popup
document.addEventListener("DOMContentLoaded", function () {
    const profileImg = document.getElementById("profile-photo");
    const popupContainer = document.getElementById("popup-container");

    // Initially hide the popup
    popupContainer.style.display = "none";

    // Toggle visibility of popup when profile image is clicked
    profileImg.addEventListener("click", function () {
        // Toggle popup visibility
        if (popupContainer.style.display === "none" || popupContainer.style.display === "") {
            popupContainer.style.display = "block"; // Show dropdown
        } else {
            popupContainer.style.display = "none"; // Hide dropdown
        }
    });

    // Close the menu if clicked outside of the profile picture and popup
    window.addEventListener("click", function (event) {
        if (!profileImg.contains(event.target) && !popupContainer.contains(event.target)) {
            popupContainer.style.display = "none"; // Hide menu if clicked outside
        }
    });
});

// Logout function
function logout() {
    // Remove loggedInUser from localStorage
    localStorage.removeItem("loggedInUser");

    // Redirect to login page
    alert("You have successfully logged out.");
    window.location.href = "login.html"; // Redirect to your login page
}

function logout() {
// Remove loggedInUser from localStorage
localStorage.removeItem("loggedInUser");

// Redirect to login page
alert("You have successfully logged out.");
window.location.href = "login.html"; // Redirect to your login page
}