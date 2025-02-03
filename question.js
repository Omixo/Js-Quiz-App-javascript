const allquestions = [
    {
        id: 1,
        question: "Which movie won the Best Picture Oscar in 1995?",
        options: [
            { id: 1, value: "Forrest Gump" },
            { id: 2, value: "Pulp Fiction" },
            { id: 3, value: "The Shawshank Redemption" },
            { id: 4, value: "Four Weddings and a Funeral" }
        ],
        answer: 1
    },
    {
        id: 2,
        question: "Who played Jack Dawson in the movie 'Titanic'?",
        options: [
            { id: 1, value: "Leonardo DiCaprio" },
            { id: 2, value: "Brad Pitt" },
            { id: 3, value: "Johnny Depp" },
            { id: 4, value: "Tom Cruise" }
        ],
        answer: 1
    },
    {
        id: 3,
        question: "Which 1987 film starring Patrick Swayze became a huge hit for its 'Nobody puts Baby in a corner' line?",
        options: [
            { id: 1, value: "Dirty Dancing" },
            { id: 2, value: "Ghost" },
            { id: 3, value: "Road House" },
            { id: 4, value: "Point Break" }
        ],
        answer: 1
    },
    {
        id: 4,
        question: "Who directed 'Jurassic Park'?",
        options: [
            { id: 1, value: "Steven Spielberg" },
            { id: 2, value: "James Cameron" },
            { id: 3, value: "George Lucas" },
            { id: 4, value: "Ridley Scott" }
        ],
        answer: 1
    },
    {
        id: 5,
        question: "Which animated film is set in the city of Zootopia?",
        options: [
            { id: 1, value: "Zootopia" },
            { id: 2, value: "Frozen" },
            { id: 3, value: "Moana" },
            { id: 4, value: "Big Hero 6" }
        ],
        answer: 1
    },
    {
        id: 6,
        question: "Who played the titular role in 'Edward Scissorhands'?",
        options: [
            { id: 1, value: "Johnny Depp" },
            { id: 2, value: "Leonardo DiCaprio" },
            { id: 3, value: "Brad Pitt" },
            { id: 4, value: "Tom Cruise" }
        ],
        answer: 1
    },
    {
        id: 7,
        question: "In which movie is the main character’s name 'The Dude'?",
        options: [
            { id: 1, value: "The Big Lebowski" },
            { id: 2, value: "Fargo" },
            { id: 3, value: "No Country for Old Men" },
            { id: 4, value: "Burn After Reading" }
        ],
        answer: 1
    },
    {
        id: 8,
        question: "'Hasta la vista, baby' is a line from which film?",
        options: [
            { id: 1, value: "Terminator 2: Judgment Day" },
            { id: 2, value: "Predator" },
            { id: 3, value: "Total Recall" },
            { id: 4, value: "Commando" }
        ],
        answer: 1
    },
    {
        id: 9,
        question: "Which 2000 film features the character Maximus Decimus Meridius?",
        options: [
            { id: 1, value: "Gladiator" },
            { id: 2, value: "Troy" },
            { id: 3, value: "300" },
            { id: 4, value: "Alexander" }
        ],
        answer: 1
    },
    {
        id: 10,
        question: "Who directed the 'Lord of the Rings' trilogy?",
        options: [
            { id: 1, value: "Peter Jackson" },
            { id: 2, value: "Christopher Nolan" },
            { id: 3, value: "Steven Spielberg" },
            { id: 4, value: "James Cameron" }
        ],
        answer: 1
    },
    {
        id: 11,
        question: "Which movie features the quote 'Here's looking at you, kid'?",
        options: [
            { id: 1, value: "Casablanca" },
            { id: 2, value: "Gone with the Wind" },
            { id: 3, value: "Citizen Kane" },
            { id: 4, value: "The Godfather" }
        ],
        answer: 1
    },
    {
        id: 12,
        question: "Who played the character of Forrest Gump?",
        options: [
            { id: 1, value: "Tom Hanks" },
            { id: 2, value: "Robin Williams" },
            { id: 3, value: "Robert De Niro" },
            { id: 4, value: "Al Pacino" }
        ],
        answer: 1
    },
    {
        id: 13,
        question: "Which movie is known for the line 'You can't handle the truth!'?",
        options: [
            { id: 1, value: "A Few Good Men" },
            { id: 2, value: "The Firm" },
            { id: 3, value: "The Pelican Brief" },
            { id: 4, value: "The Client" }
        ],
        answer: 1
    },
    {
        id: 14,
        question: "Who directed the movie 'Inception'?",
        options: [
            { id: 1, value: "Christopher Nolan" },
            { id: 2, value: "Steven Spielberg" },
            { id: 3, value: "James Cameron" },
            { id: 4, value: "Quentin Tarantino" }
        ],
        answer: 1
    },
    {
        id: 15,
        question: "Which movie features the character 'Hannibal Lecter'?",
        options: [
            { id: 1, value: "The Silence of the Lambs" },
            { id: 2, value: "Se7en" },
            { id: 3, value: "The Sixth Sense" },
            { id: 4, value: "The Usual Suspects" }
        ],
        answer: 1
    },
    {
        id: 16,
        question: "Which movie is set in the fictional African country of Wakanda?",
        options: [
            { id: 1, value: "Black Panther" },
            { id: 2, value: "Coming to America" },
            { id: 3, value: "The Lion King" },
            { id: 4, value: "Hotel Rwanda" }
        ],
        answer: 1
    },
    {
        id: 17,
        question: "Who played the character of 'The Joker' in 'The Dark Knight'?",
        options: [
            { id: 1, value: "Heath Ledger" },
            { id: 2, value: "Joaquin Phoenix" },
            { id: 3, value: "Jack Nicholson" },
            { id: 4, value: "Jared Leto" }
        ],
        answer: 1
    },
    {
        id: 18,
        question: "Which movie features the quote 'May the Force be with you'?",
        options: [
            { id: 1, value: "Star Wars" },
            { id: 2, value: "Star Trek" },
            { id: 3, value: "Guardians of the Galaxy" },
            { id: 4, value: "The Matrix" }
        ],
        answer: 1
    },
    {
        id: 19,
        question: "Who directed the movie 'Pulp Fiction'?",
        options: [
            { id: 1, value: "Quentin Tarantino" },
            { id: 2, value: "Martin Scorsese" },
            { id: 3, value: "Francis Ford Coppola" },
            { id: 4, value: "Stanley Kubrick" }
        ],
        answer: 1
    },
    {
        id: 20,
        question: "Which movie features the character 'Neo'?",
        options: [
            { id: 1, value: "The Matrix" },
            { id: 2, value: "Inception" },
            { id: 3, value: "Blade Runner" },
            { id: 4, value: "Minority Report" }
        ],
        answer: 1
    }
];



// Yeh function ek question ko load karega
function loadQuestion() {
    const questionNumberElement = document.getElementById("question-number");
    const questionTextElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const progressBar = document.getElementById("progress-bar");

    // Current question nikal raha hai
    const currentQuestion = randomQuestions[currentQuestionIndex];

    // Question number aur text update karna
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${randomQuestions.length}`;
    questionTextElement.innerText = currentQuestion.question;

    // Pichle options hata raha hai
    optionsContainer.innerHTML = "";

    // Naye options add karna
    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";

        optionElement.innerHTML = `
            <label>
                <input type="radio" name="answer" value="${option.id}">
                ${option.value}
            </label>
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Progress bar update karna
    const progress = ((currentQuestionIndex + 1) / randomQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Previous button enable/disable karna
    const previousButton = document.getElementById("previous-button");
    previousButton.disabled = currentQuestionIndex === 0;

    // Jab answer select ho toh usko store karne ka event listener
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', selectAnswer);
    });
}

// Answer select karne ka function
function selectAnswer(event) {
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach((option) => {
        option.parentElement.style.backgroundColor = ''; // Background color reset kar raha hai
    });

    // Select kiya hua option highlight karna
    event.target.parentElement.style.backgroundColor = 'yellow';
    const selectedAnswerId = event.target.value;
    const currentQuestion = randomQuestions[currentQuestionIndex];

    // Selected answer ko store karna
    answers[currentQuestionIndex] = { questionId: currentQuestion.id, selectedAnswerId: selectedAnswerId };
}

// User ka data retrieve karna
function collectUserInfo() {
    var user = localStorage.getItem("loggedInUser"); // LocalStorage se user ka data lena
    return user;
}

// Next question par jaana
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!"); // Agar user ne answer select nahi kiya toh alert karega
        return;
    }

    // Next question par move karna
    currentQuestionIndex++;

    if (currentQuestionIndex < randomQuestions.length) {
        loadQuestion();
    } else {
        submitAnswers(); // Last question ke baad answers submit karna
        alert("Quiz complete! Click Submit.");
    }
}

// Previous question par jaana
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Answers submit karna
function submitAnswers() {
    var score = 0;
    var users = JSON.parse(localStorage.getItem("loggedInUser")) || {};

    var quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    if (!Array.isArray(quizResults)) {
        quizResults = [];  // Agar quizResults array nahi hai toh usko empty array bana dega
    }

    answers.map(answer => {
        const question = randomQuestions.find(q => q.id === answer.questionId);
        if(answer.selectedAnswerId == question.answer) {
            score = score + 100; // Agar answer sahi hai toh score badh raha hai
        }
    });
    
    var result = {
        emailId: users.emailId,
        fullName: users.fullName,
        answers: answers.map(answer => {
            const question = randomQuestions.find(q => q.id === answer.questionId);
            return {
                questionId: answer.questionId,
                questionText: question.question,
                selectedAnswerId: answer.selectedAnswerId,
                correctAnswerId: question.answer,    
            };
        }),
        score: score
    };

    // Result ko localStorage me save karna
    quizResults.push(result);
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
    
    // Result submit hone ke baad ranking page pe redirect karna
    window.location.href="ranking.html";
}

// Quiz start hone par pehla question load karna
loadQuestion();