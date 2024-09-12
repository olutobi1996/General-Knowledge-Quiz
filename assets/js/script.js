/* These are the const Quiz Questions
 will will remain the same throughout, 
 This section of code was also adapted from a 
 quiz video online i have referenced in my README.MD
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
    },
    {
        question: "What year did world war II end?",
        answers: [
            { text: "1950", correct: false },
            { text: "1945", correct: true },
            { text: "1960", correct: false },
            { text: "1940", correct: false },
        ]
    },
    {
        question: "Where did sushi originate?",
        answers: [
            { text: "China", correct: false },
            { text: "Fiji", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
        ]
    }
];

/* The code below will change
the questions
and the next question will be shown to 
user using next button that is being fetched from 
html
*/ 
const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next");

/* The code below represents
the current question index and score 
varibles
*/ 
let currentQuestionIndex = 0;
let score = 0;
let MinScore = 7;

// Timer variables
let sec = 60;
let time = setInterval(myTimer, 1000);


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
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

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
        document.getElementById("score").innerHTML = "Score: " + score + "/8";
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
    if (currentQuestionIndex > 8){
        startQuiz();
        return;
    } 
         showQuestion(); 
}


//Timer function for questions

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "seconds left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Your Time Is Up, Sorry!");
    }
}

 document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
  });


//Start Quiz funtion
startQuiz();