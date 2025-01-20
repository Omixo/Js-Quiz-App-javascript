const questions = [
    { 
        question: "1. Who directed the movie 'Inception'?", 
        options: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "James Cameron"] 
    },
    { 
        question: "2. What year was the movie 'The Godfather' released?", 
        options: ["1970", "1972", "1974", "1976"] 
    },
    { 
        question: "3. Which actor played the Joker in 'The Dark Knight'?", 
        options: ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"] 
    },
    { 
        question: "4. What is the highest-grossing film of all time?", 
        options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"] 
    },
    { 
        question: "5. Which movie features the quote, 'May the Force be with you'?", 
        options: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "Dune"] 
    },
    { 
        question: "6. Who played Iron Man in the Marvel Cinematic Universe?", 
        options: ["Robert Downey Jr.", "Chris Hemsworth", "Chris Evans", "Mark Ruffalo"] 
    },
    { 
        question: "7. What is the name of the kingdom in Disney's 'Frozen'?", 
        options: ["Arendelle", "Atlantis", "Narnia", "Erebor"] 
    },
    { 
        question: "8. Which movie won the Best Picture Oscar in 2020?", 
        options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"] 
    },
    { 
        question: "9. Who voiced Woody in the 'Toy Story' franchise?", 
        options: ["Tom Hanks", "Tim Allen", "Billy Crystal", "Robin Williams"] 
    },
    { 
        question: "10. What is the name of the main character in 'The Matrix'?", 
        options: ["Neo", "Morpheus", "Trinity", "Smith"] 
    }
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const questionNumberElement = document.getElementById('question-number');
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');

    const questionData = questions[index];
    questionNumberElement.textContent = `Question ${index + 1}`;
    questionTextElement.textContent = questionData.question;
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsContainer.appendChild(label);
    });

    // Hide "Previous" button on the first question
    previousButton.style.visibility = (index === 0) ? 'hidden' : 'visible';

    // Change "Next" button to "Submit" on the last question
    nextButton.textContent = (index === questions.length - 1) ? 'Submit' : 'Next';

    // Update progress bar
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        submitQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function submitQuiz() {
    alert('You have completed the quiz!');
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(currentQuestionIndex);
});
