// HTML Elements Being Called
var quizBody = document.getElementById("Quiz")
var quizTimer = document.getElementById("Timer")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var highScoreContainer = document.getElementById("highScoreContainer");
var highScoreDiv = document.getElementById("highScore-Page"); 
var highScoreDisplayName = document.getElementById("highScore-Initials");
var highScoreDisplayScore = ("highScore-Score");
var highScoreInputName = ("initials");
var startQuizDiv = document.getElementById("mainPage");
var endGameBtn = document.getElementById("endGameBtn");
var startQuizButton = document.getElementById("mainBtn");
var GameOverDiv = document.getElementById("GameOver");
var submitScoreBtn = document.getElementById("submitScore");
var resultsEl = document.getElementById("Q");
var finalScoreEl = document.getElementById("finalScore");

// quiz questions
var quizQuestions = [{
    question: "Commonly used data types DO NOT Include:",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Alerts",
    choiceD: "Numbers",
    correctAnswer: "c"},
    {
     question: "The condition in an if / else statement is enclosed with _________.",
     choiceA: "Quotes",
     choiceB: "Curly Brackets",
     choiceC: "Parenthesis",
     choiceD: "Square Brackets",
     correctAnswer: "b"},
     {
     question: "Arrays in JavaScript can be used to store __________.",
     choiceA: "Numbers and Strings",
     choiceB: "Other Arrays",
     choiceC: "Booleans",
     choiceD: "All Of The Above",
     correctAnswer: "d"},
     {
     question: "String values must be enclosed within ______ when being assinged to variables.",
     choiceA: "Commas",
     choiceB: "Curly Brackets",
     choiceC: "Quotes",
     choiceD: "Parenthesis",
     correctAnswer: "c"},
     {
     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
     choiceA: "JavaScript",
     choiceB: "Terminal/Bash",
     choiceC: "For Loops",
     choiceD: "Console Log",
     correctAnswer: "d" 
     }
    ];

    var finalQuestionIndex = quizQuestions.length;
    var currentQuestionIndex = 0;
    var timeLeft = 76;
    var timerInterval;
    var score = 0;
    var correct;

// This function cycles through the objecy array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion(){
    GameOverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// start quiz function starts timer, hides the buttton itself and shows the first question.
function startQuiz(){
    GameOverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    },1000);
    quizBody.style.display = "block";
}

// end page screen after finishing quiz or running out of time
function showScore(){
    quizBody.style.display = "none"
    GameOverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highScoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// when we click the submit button, we run the highscore function that stores and stringifies the high score array that's already saved in local storage
// we also are pushing the new user name and score into the array we are saving within local storage.
submitScoreBtn.addEventListener("click", function highscore(){

    if(highScoreInputName.value === "") {
        alert("Initials cannot be empty");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highScoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score: score
        };

        GameOverDiv.style.display = "none";
        highScoreContainer.style.display = "flex";
        highScoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

// This function clears the list for the high scores and generates a new high score list from local storage
function generateHighscores(){
    highScoreDisplayName.innerHTML = "";
    highScoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highScoreDisplayName.appendChild(newNameSpan);
        highScoreDisplayScore.appendChild(newScoreSpan);
    }
}

//






