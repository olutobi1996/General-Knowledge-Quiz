/* These are the const Quiz Questions
 will will remain the same throughout
*/
const questions = [
    {
        question: "what football team won the world cup in 1966?",
        answers: [
            { text: "England", correct: true },
            { text: "Germany", correct: false },
            { text: "Brazil", correct: false },
            { text: "France", correct: false },
        ]
    },
    {
        question: "How many coloured rings in the Olympic Flag?",
        answers: [
            { text: "2", correct: false },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
        ]
    },
    {
        question: "Who directed the film pulp fiction?",
        answers: [
            { text: "Daniel Day Lewis", correct: false },
            { text: "Quentin Taratino", correct: true },
            { text: "Steven Speilberg", correct: false },
            { text: "Martin Scorses", correct: false },
        ]
    },
    {
        question: "In the film Lion King Mufasa dies from being trampled on by a pack of?",
        answers: [
            { text: "sheep", correct: false },
            { text: "hyenas", correct: false },
            { text: "wildebeests", correct: true },
            { text: "bears", correct: false },
        ]
    },
    {
        question: "Who wrote the novel of mice and men?",
        answers: [
            { text: "Virginia Woolf", correct: false },
            { text: "Elaine Anderson", correct: false },
            { text: "William Faulkner", correct: false },
            { text: "John Steinbeck", correct: true },
        ]
    },
    {
        question: "What is the name of the fourth book in the Harry Potter Series?",
        answers: [
            { text: "Harry Potter and the Goblet of Fire", correct: true },
            { text: "Harry Potter and the Deathly Hallows", correct: false },
            { text: "Harry Potter and Philosophers Stone", correct: false },
            { text: "Harry Potter and Half Blood Prince", correct: false },
        ]
    }
];

/* The code below will change
the questions
and the next question will be shown to 
user using next button
*/ 
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next");

/* The code below represents
the current question that is being
asked
*/ 
let currentQuestionIndex = 0;
let score = 0;


// Start Quiz function whic includes an event listner from the user
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    nextButton.addEventListener("click", nextQuestion);
    showQuestion();
}

/* The code below will change
the questions
and the next question will be shown to 
user using next button
*/ 
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        document.getElementById("answer-buttons").appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//reset state function

function resetState() {
    nextButton.style.display = "none";
    document.getElementById("answer-buttons").innerHTML = "";
}

/* The code below is a loop 
to see if the question answered is true
and if correct the socre will add 1
*/ 

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
        document.getElementById("score").innerHTML = "Score: " + score + "/6";
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(document.getElementsByClassName("btn")).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

/* Next Question function,
includes a loop which returns the start of 
the quiz once the user is on the last question
*/ 

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex > 5) {
        startQuiz();
        return;
    }
    showQuestion();
}

//Start Quiz funtion

startQuiz();