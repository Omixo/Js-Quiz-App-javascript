const allquestions = [
    {
        id: 1,
        question: "Who did Roman Reigns target in his first official promo as the Tribal Chief?",
        options: [
            { id: 1, value: "Jey Uso" },
            { id: 2, value: "The Fiend" },
            { id: 3, value: "Braun Strowman" },
            { id: 4, value: "Kevin Owens" }
        ],
        answer: 1
    },
    {
        id: 2,
        question: "What phrase did Paul Heyman use to describe Roman Reigns' dominance after his return?",
        options: [
            { id: 1, value: "He's the final boss" },
            { id: 2, value: "He's the end of the line" },
            { id: 3, value: "He's the unstoppable force" },
            { id: 4, value: "He's the reason why WWE exists" }
        ],
        answer: 2
    },
    {
        id: 3,
        question: "Which event featured Roman Reigns saying, 'I don’t care about anyone’s sob story' to Jey Uso?",
        options: [
            { id: 1, value: "Clash of Champions 2020" },
            { id: 2, value: "Hell in a Cell 2020" },
            { id: 3, value: "Survivor Series 2020" },
            { id: 4, value: "Payback 2020" }
        ],
        answer: 1
    },
    {
        id: 4,
        question: "Which opponent did Roman Reigns mock by calling him a 'fighting champion who fights for the people' before beating him?",
        options: [
            { id: 1, value: "Edge" },
            { id: 2, value: "John Cena" },
            { id: 3, value: "Drew McIntyre" },
            { id: 4, value: "Cody Rhodes" }
        ],
        answer: 2
    },
    {
        id: 5,
        question: "Which moment led to Jey Uso saying, 'I’m out, Uce' and officially leaving The Bloodline?",
        options: [
            { id: 1, value: "Roman attacking Jimmy Uso" },
            { id: 2, value: "Roman forcing him to acknowledge him" },
            { id: 3, value: "Roman laughing at his pain" },
            { id: 4, value: "Paul Heyman calling him the weak link" }
        ],
        answer: 1
    },
    {
        id: 6,
        question: "What did Roman Reigns say after Jey Uso first refused to acknowledge him?",
        options: [
            { id: 1, value: "'Then you ain’t Bloodline'" },
            { id: 2, value: "'Then you're just a pawn'" },
            { id: 3, value: "'Then you’re out'" },
            { id: 4, value: "'Then you're just another Uso'" }
        ],
        answer: 1
    },
    {
        id: 7,
        question: "Who was the first WWE Superstar to use the phrase 'YEET' on TV before Jey Uso made it his catchphrase?",
        options: [
            { id: 1, value: "Enzo Amore" },
            { id: 2, value: "Ricochet" },
            { id: 3, value: "Jimmy Uso" },
            { id: 4, value: "Solo Sikoa" }
        ],
        answer: 1
    },
    {
        id: 8,
        question: "Why did Drew McIntyre say he had 'unfinished business' when he turned heel?",
        options: [
            { id: 1, value: "Because he lost to Roman Reigns unfairly" },
            { id: 2, value: "Because CM Punk returned" },
            { id: 3, value: "Because Seth Rollins took his spot" },
            { id: 4, value: "Because he never got his WrestleMania moment in front of a crowd" }
        ],
        answer: 4
    },
    {
        id: 9,
        question: "What was the most controversial line CM Punk used against Drew McIntyre in their promo battle?",
        options: [
            { id: 1, value: "'You weren’t even the second choice'" },
            { id: 2, value: "'You were a failure even when you were chosen'" },
            { id: 3, value: "'You peaked in an empty arena'" },
            { id: 4, value: "'You’ll never be the guy'" }
        ],
        answer: 3
    },
    {
        id: 10,
        question: "Which championship match did Drew McIntyre blame for ruining his career?",
        options: [
            { id: 1, value: "Clash at the Castle 2022" },
            { id: 2, value: "Elimination Chamber 2023" },
            { id: 3, value: "WrestleMania 36" },
            { id: 4, value: "Royal Rumble 2021" }
        ],
        answer: 1
    },
    {
        id: 11,
        question: "Which personal event did Seth Rollins reference to mock CM Punk?",
        options: [
            { id: 1, value: "His failed UFC career" },
            { id: 2, value: "His WWE walkout in 2014" },
            { id: 3, value: "His issues with Triple H" },
            { id: 4, value: "His inability to stay in a company" }
        ],
        answer: 4
    },
    {
        id: 12,
        question: "Which Roman Reigns promo did The Rock respond to in 2024?",
        options: [
            { id: 1, value: "His 'Greatest of all time' promo" },
            { id: 2, value: "His 'Head of the Table' promo" },
            { id: 3, value: "His 'I run this place' promo" },
            { id: 4, value: "His 'Nobody can touch me' promo" }
        ],
        answer: 1
    },
    {
        id: 13,
        question: "What did CM Punk call Seth Rollins during their contract signing?",
        options: [
            { id: 1, value: "'A fake rebel'" },
            { id: 2, value: "'The second choice'" },
            { id: 3, value: "'A wannabe leader'" },
            { id: 4, value: "'Roman’s leftovers'" }
        ],
        answer: 4
    },
    {
        id: 14,
        question: "What insult did Roman Reigns use against Cody Rhodes at WrestleMania 39?",
        options: [
            { id: 1, value: "'You run from adversity'" },
            { id: 2, value: "'You ain’t ready for this'" },
            { id: 3, value: "'You don’t have what it takes'" },
            { id: 4, value: "'You were made for mid-card'" }
        ],
        answer: 1 

    },
    
    {
    id: 15,
            question: "During Roman Reigns' heel run, who was the first person to pin him clean in a singles match?",
            options: [
                { id: 1, value: "Seth Rollins" },
                { id: 2, value: "Cody Rhodes" },
                { id: 3, value: "Jey Uso" },
                { id: 4, value: "Kevin Owens" }
            ],
            answer: 3
        ,
    },
        {
            id: 16,
            question: "What did Drew McIntyre call CM Punk when Punk was injured and couldn't compete?",
            options: [
                { id: 1, value: "'The softest guy in the locker room'" },
                { id: 2, value: "'The best in the world at getting hurt'" },
                { id: 3, value: "'The biggest fraud in WWE history'" },
                { id: 4, value: "'A broken man clinging to relevance'" }
            ],
            answer: 2
        },
        {
            id: 17,
            question: "Which phrase did Paul Heyman use to describe Roman Reigns' rule in WWE?",
            options: [
                { id: 1, value: "'The greatest title reign of all time'" },
                { id: 2, value: "'A reign of terror'" },
                { id: 3, value: "'The most dominant champion in modern history'" },
                { id: 4, value: "'The undisputed ruler of WWE'" }
            ],
            answer: 3
        },
        {
            id: 18,
            question: "What was the first major move Jey Uso used against Roman Reigns after leaving The Bloodline?",
            options: [
                { id: 1, value: "Superkick" },
                { id: 2, value: "Spear" },
                { id: 3, value: "Uso Splash" },
                { id: 4, value: "Chair shot" }
            ],
            answer: 2
        },
        {
            id: 19,
            question: "In their heated promo, what did CM Punk say Seth Rollins' biggest weakness was?",
            options: [
                { id: 1, value: "'Your obsession with being the guy'" },
                { id: 2, value: "'Your fake tough guy act'" },
                { id: 3, value: "'Your need for validation'" },
                { id: 4, value: "'Your ego will destroy you'" }
            ],
            answer: 3
        },
        {
            id: 20,
            question: "What was the last thing Roman Reigns said before attacking Drew McIntyre in their final face-off?",
            options: [
                { id: 1, value: "'You ain't built like me'" },
                { id: 2, value: "'This is my era'" },
                { id: 3, value: "'I’m still the Head of the Table'" },
                { id: 4, value: "'Acknowledge me or get out of my ring'" }
            ],
            answer: 1
        }

    
];

// Function to shuffle the questions and select 10 random questions
function getRandomQuestions(allquestions, numQuestions) {
    const shuffledQuestions = allquestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, numQuestions);
}

// Store the questions in localStorage only if they are not already stored
var questionsStorage = localStorage.getItem("allquestions");
if (!questionsStorage) {
    localStorage.setItem("allquestions", JSON.stringify(allquestions));
}

// Quiz State
let currentQuestionIndex = 0;
const answers = []; // Stores objects with questionId and selected answerId

// Get 10 random questions
const randomQuestions = getRandomQuestions(allquestions, 10);

// User information
const userInfo = {
    id: null,
    name: null,
    email: null
};

// Load a question
function loadQuestion() {
    const questionNumberElement = document.getElementById("question-number");
    const questionTextElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const progressBar = document.getElementById("progress-bar");
    const nextButton = document.getElementById("next-button");
    const submitButton = document.getElementById("submit-button");
    const previousButton = document.getElementById("previous-button");

    // Get current question
    const currentQuestion = randomQuestions[currentQuestionIndex];

    // Special messages for Q8 & Q10
    let extraMessage = "";
    if (currentQuestionIndex === 7) {
        extraMessage = " - Hey! Last 2 questions remaining! ";
    } else if (currentQuestionIndex === 9) {
        extraMessage = " - This is your last question! Make it count!";
    }

    // Update question number and text
    questionNumberElement.innerText = `Question ${currentQuestionIndex + 1} of ${randomQuestions.length}${extraMessage}`;
    questionTextElement.innerText = currentQuestion.question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    if (currentQuestion.options && currentQuestion.options.length > 0) {
        currentQuestion.options.forEach((option) => {
            const optionElement = document.createElement("div");
            optionElement.className = "option";
            optionElement.innerHTML = `
                <label>
                    <input type="radio" name="answer" value="${option.id}" onclick="selectAnswer(event)">
                    ${option.value}
                </label>
            `;
            optionsContainer.appendChild(optionElement);
        });

        // Restore previously selected answer and highlight
        const previousAnswer = answers[currentQuestionIndex];
        if (previousAnswer) {
            const selectedInput = document.querySelector(`input[name="answer"][value="${previousAnswer.selectedAnswerId}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
                selectedInput.parentElement.style.backgroundColor = '#F3BD00'; // Restore yellow highlight
            }
        }
    } else {
        optionsContainer.innerHTML = "<p style='color:red;'>No options available for this question.</p>";
    }

    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / randomQuestions.length) * 100}%`;

    // Update button visibility based on question number
    if (currentQuestionIndex === 9) {
        nextButton.style.display = "none"; // Hide Next on last question
        submitButton.style.display = "block"; // Show Submit Quiz
    } else {
        nextButton.style.display = "block"; // Show Next for other questions
        nextButton.innerText = "Next & Continue ->";
        submitButton.style.display = "none"; // Hide Submit for other questions
    }

    // Enable/disable previous button
    previousButton.disabled = currentQuestionIndex === 0;
}

// Handle answer selection and highlight the selected option
function selectAnswer(event) {
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach((option) => {
        option.parentElement.style.backgroundColor = ''; // Reset highlight
    });

    // Highlight the selected option
    event.target.parentElement.style.backgroundColor = '#F3BD00';
    const selectedAnswerId = event.target.value;
    const currentQuestion = randomQuestions[currentQuestionIndex];

    // Store the selected answer with its question ID
    answers[currentQuestionIndex] = { questionId: currentQuestion.id, selectedAnswerId: selectedAnswerId };
}

// Move to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const selectedAnswerId = selectedOption.value;
    const currentQuestion = randomQuestions[currentQuestionIndex];

    // Store the selected answer
    answers[currentQuestionIndex] = { 
        questionId: currentQuestion.id, 
        selectedAnswerId: selectedAnswerId 
    };

    // Move to next question
    currentQuestionIndex++;

    if (currentQuestionIndex < randomQuestions.length) {
        loadQuestion(); // Load next question
    } else {
        submitAnswers();
        alert("Quiz complete! Click Submit.");
    }
}

// Move to the previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Submit answers
function submitAnswers() {
    let score = 0;
    let users = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    let quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    
    if (!Array.isArray(quizResults)) {
        quizResults = []; // Reset if it's not an array
    }

    // Calculate score
    answers.forEach(answer => {
        const question = randomQuestions.find(q => q.id === answer.questionId);
        if (answer.selectedAnswerId == question.answer) {
            score += 100;
        }
    });

    // Store result
    let result = {
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

    // Save to local storage
    quizResults.push(result);
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
    window.location.href = "ranking.html";
}

// Initialize the quiz
loadQuestion();
