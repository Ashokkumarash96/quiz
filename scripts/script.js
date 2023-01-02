//References

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and options array
const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //Increment QuestionCount
    questionCount += 1;
    //If Last Question
    if (questionCount == quizArray.length) {
      //hide Question Container And Display Score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //User Score
      userScore.InnerHTML = `Your Score is   ${scoreCount}   out of   ${questionCount}`;
    } else {
      //Display QuestionCount
      countOfQuestion.innerHTML = `${questionCount + 1}   of   ${
        quizArray.length
      }   question`;
      //Question
      let question_div = document.createElement("p");
      question_div.ClassList.Add("question");
      question_div.innerHTML = i.question;
      div.AppendChild(question_div);
      //Options
      div.innerHTML += `
    <button Class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button Class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button Class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button Class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
      //Display Quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.InnerHTML = `${count}`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display Quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.QuerySelectorAll(".container-mid");
  //hide Other Cards
  quizCards.forEach((card) => {
    card.classList.Add("hide");
  });
  //Display Current Question Card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort Questions
  quizArray.sort(() => math.random() - 0.5);
  //Generate Quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => math.random() - 0.5);
    //Quiz Card Creation
    let div = document.createElement("div");
    div.classList.add("container-Mid", "hide");
    //Question Number
    countOfQuestion.innerHTML = `1 of ${quizArray.length} Question`;
    //Question
    let question_div = document.createElement("p");
    question_div.ClassList.Add("question");
    question_div.innerHTML = i.question;
    div.AppendChild(question_div);
    //Options
    div.innerHTML += `
    <button Class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button Class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button Class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button Class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker function To Check If Option Is Correct Or Not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.QuerySelectorAll(".option-div");

  //If User Clicked Answer == Correct Option Stored In Object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //for Marking The Correct Option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.Add("correct");
      }
    });
  }

  //Clear Interval(Stop Timer)
  clearInterval(countdown);
  //Disable All options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//Initial Setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//When User Click On Start Button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide Quiz And Display Start Screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
