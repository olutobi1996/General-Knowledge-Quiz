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
      ],
    },
    {
      question: "How many coloured rings in the Olympic Flag?",
      answers: [
        { text: "2", correct: false },
        { text: "6", correct: false },
        { text: "4", correct: false },
        { text: "5", correct: true },
      ],
    },
    {
      question: "Who directed the film pulp fiction?",
      answers: [
        { text: "Daniel Day Lewis", correct: false },
        { text: "Quentin Taratino", correct: true },
        { text: "Steven Speilberg", correct: false },
        { text: "Martin Scorses", correct: false },
      ],
    },
    {
      question:
        "In the film Lion King Mufasa dies from being trampled on by a pack of?",
      answers: [
        { text: "sheep", correct: false },
        { text: "hyenas", correct: false },
        { text: "wildebeests", correct: true },
        { text: "bears", correct: false },
      ],
    },
    {
      question: "Who wrote the novel of mice and men?",
      answers: [
        { text: "Virginia Woolf", correct: false },
        { text: "Elaine Anderson", correct: false },
        { text: "William Faulkner", correct: false },
        { text: "John Steinbeck", correct: true },
      ],
    },
    {
      question: "What is the name of the fourth book in the Harry Potter Series?",
      answers: [
        { text: "Harry Potter and the Goblet of Fire", correct: true },
        { text: "Harry Potter and the Deathly Hallows", correct: false },
        { text: "Harry Potter and Philosophers Stone", correct: false },
        { text: "Harry Potter and Half Blood Prince", correct: false },
      ],
    },
    {
      question: "What year did world war II end?",
      answers: [
        { text: "1950", correct: false },
        { text: "1945", correct: true },
        { text: "1960", correct: false },
        { text: "1940", correct: false },
      ],
    },
    {
      question: "Where did sushi originate?",
      answers: [
        { text: "China", correct: false },
        { text: "Fiji", correct: false },
        { text: "South Korea", correct: false },
        { text: "Japan", correct: true },
      ],
    },
  ];
  
  //const variables for quiz
  const questionElement = document.getElementById("question");
  const nextButton = document.getElementById("next");
  const firstName = document.getElementById("first-name").value,
  const lastName = document.getElementById("last-name").value;
  
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  const buttons = document.querySelectorAll("button");


//audio for buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

    /* The code below will change
  the questions
  and the next question will be shown to 
  user using next button that is being fetched from 
  html (this code is my own)
  */
  function welcomeTheUser() {
    document.getElementById( 'startQuiz' ).style.display = 'none';
    alert(`Welcome ${firstName} ${lastName}`);
    button.addEventListener("click", welcomeTheUser);
}
  /* The code below represents
  the current question index and score 
  varibles (this code is my own)
  */
  let currentQuestionIndex = 0;
  let score = 0;
  let MinScore = 7;
  
  // Timer variables (this code is my own)
  let sec = 60;
  let time = setInterval(myTimer, 1000);
  
  // Start Quiz function whic includes an event listner from the user (this code is my own)
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
  user using next button (this code is my own)
  */
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  
    /* This will show the answer buttons by fetching from html
      Will also use event listener to listen out for correct answer, 
      this code was inspired by code institue project 2 love maths 
      creating event listeners module
      https://www.youtube.com/watch?v=C3O-G2ab46Q
  */
    currentQuestion.answers.forEach((answer) => {
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
  
  /* Reset state function will 
  reset the quiz (this code is my own)
  */
  
  function resetState() {
    nextButton.style.display = "none";
    document.getElementById("answer-buttons").innerHTML = "";
  }
  
  /* The code below is a loop 
  to see if the question answered is true
  and if correct the socre will add 1,
  this code was inspired by code institue project 2 love maths 
  calculating correct answer module
   https://www.youtube.com/watch?v=pGFVvUqvXzM
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
    Array.from(document.getElementsByClassName("btn")).forEach((button) => {
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
  (this code is my own)
  */
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex > 8) {
      startQuiz();
      return;
    }
    showQuestion();
  }
  
  /* Timer function fetches timer ID from html, 
  the timer runs, if timer is equal to -1 time will stop
  message will alert (this code is my own)
  */
  
  function myTimer() {
    document.getElementById("timer").innerHTML = sec + "seconds left";
    sec--;
    if (sec == -1) {
      clearInterval(time);
      alert("Your Time Is Up, Sorry!")
      return  resetState();
    }
   
  }
  
  /* this event listener will reload quiz 
      this code was inspired by code institue project 2 love maths 
      https://www.youtube.com/watch?v=C3O-G2ab46Q
  */
  document.querySelector(".restart-btn").addEventListener("click", function () {
    window.location.reload();
    return false;
  });
  
  //Start Quiz funtion (this code is my own)
  startQuiz();
  