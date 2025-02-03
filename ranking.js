function displayRankings() {
    const quizResults = JSON.parse(localStorage.getItem('quizResults')) || []; // Quiz results ko localStorage se fetch kar rahe hain
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')); // Logged-in user ki details fetch kar rahe hain

    console.log("Quiz Results:", quizResults); // Console me quiz results dikhana
    console.log("Logged-in User:", loggedInUser); // Console me logged-in user dikhana

    // Results ko score ke basis pe descending order me sort karna
    quizResults.sort((a, b) => b.score - a.score);

    // Ranking elements ke references le rahe hain
    const firstNameEl = document.getElementById('firstName');
    const firstScoreEl = document.getElementById('first');
    const secondNameEl = document.getElementById('secondName');
    const secondScoreEl = document.getElementById('second');
    const thirdNameEl = document.getElementById('thirdName');
    const thirdScoreEl = document.getElementById('third');
    const otherUsersContainer = document.querySelector('.other-users-container');

    // Pehle se dikhaaye gaye rankings ko clear karna
    otherUsersContainer.innerHTML = '';

    // Top 3 ranks ko display karna
    if (quizResults.length > 0) {
        firstNameEl.innerText = quizResults[0].fullName; // First rank ka naam dikhana
        firstScoreEl.innerText = quizResults[0].score; // First rank ka score dikhana
    }

    if (quizResults.length > 1) {
        secondNameEl.innerText = quizResults[1].fullName; // Second rank ka naam dikhana
        secondScoreEl.innerText = quizResults[1].score; // Second rank ka score dikhana
    }

    if (quizResults.length > 2) {
        thirdNameEl.innerText = quizResults[2].fullName; // Third rank ka naam dikhana
        thirdScoreEl.innerText = quizResults[2].score; // Third rank ka score dikhana
    }

    // Sirf ranks #4, #5, aur #6 ko show karna
    quizResults.slice(3, 6).forEach((user, index) => {
        const isLoggedInUser = loggedInUser && loggedInUser.fullName === user.fullName; // Check kar rahe hain ki user logged-in hai ya nahi

        const userDiv = document.createElement('div');
        userDiv.className = `user-score ${isLoggedInUser ? 'highlighted' : ''}`; // Agar logged-in user hai toh usko highlight karna

        userDiv.innerHTML = `
            <span class="rank">#${index + 4}</span> <!-- Rank numbering ko adjust kar rahe hain -->
            <span class="name">${user.fullName}</span>
            <span class="score">${user.score}</span>
        `;

        otherUsersContainer.appendChild(userDiv); // User ki details ko container me add karna
    });

    console.log("Updated Rankings Displayed"); // Updated rankings ko console me show karna
}

document.addEventListener('DOMContentLoaded', displayRankings); // Jab page load ho, tab rankings ko display karna


// Function to log out the user
function logout() {
    localStorage.removeItem('loggedInUser'); // Logged-in user ko localStorage se remove karna
    window.location.href = 'login.html'; // Logout hone ke baad login page pe redirect karna
}
