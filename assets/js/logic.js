let currentQuestionIndex = 0;
let time = questions.length * 1;
let timerID;

let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackButton = document.getElementById("feedback");

function quizEnd() {
    clearInterval(timerID)
    
    let endScreenElement = document.getElementById("end-screen")
    questionsElement.setAttribute("class", "hide")
    endScreenElement.removeAttribute("class")

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = printHighScore()
}

function clockTick() {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

function startQuiz() {
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide")

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);

    getQuestions()
}

function getQuestions() {
    questionsElement.removeAttribute("class")
    let questionTitle = document.getElementById("question-title")
    questionTitle.textContent = questions.title
}

function questionClick() {

}

function saveHighScore() {

}

function checkForEnter(event) {

}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);