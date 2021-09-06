// bunching HTML elements 
var quizBody = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
// mulitple choice boxes
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");



// quiz question object
var quizQuestions = [{
question: "Commonly used data types DO NOT include:",
choiceA: "Strings",
choiceB: "Booleans",
choiceC: "Alerts",
choiceD: "numbers",
correctAnswer: "c"},
{
question: "The condition in an if / else statement is enclosed with ______.",
choiceA: "Quotes",
choiceB: "Curly Brackets",
choiceC: "Parenthesis",
choiceD: "Square Brackets",
correctAnswer: "b"},
{
question: "Array in JavaScript can be used to store ______",
choiceA: "Numbers and Strings",
choiceB: "Other Arrays",
choiceC: "Booleans",
choiceD: "All Of The Above",
correctAnswer: "d"},
{ 
question: "String values must be enclosed within ______ when being assigned to variables.",
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
correctAnswer: "d"},  
{
question: "Inside which HTML element do we put the JavaScript?",
choiceA: "<javascript>",
choiceB: "<scripting>",
choiceC: "<script>",
choiceD: "<js>",
correctAnswer: "c"},
{
question: "Where is the correct place to insert a JavaScript?",
choiceA: "The <body> section",
choiceB: "Both the <head> section and the <body> section are correct",
choiceC: "The <head> section",
choiceD: "Inside the <footer> ",
correctAnswer: "b"},
];

// start quiz button, starts timer, hides itself and shows first question
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();
    
    // Timer
        timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
        
    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
    }, 1000);
        quizBody.style.display = "block";
    }
    

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// goes through object array holding my quiz questions to generate questions and answers 
function generateQuizQuestion(){
gameoverDiv.style.display = "none";
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

// end game screen after finshing game or running out of time
function showScore(){
quizBody.style.display = "none"
gameoverDiv.style.display = "flex";
clearInterval(timerInterval);
highscoreInputName.value = "";
finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// run function highscore after clicking submit score button
// send new user name and score into local storage array.
// then display scores

submitScoreBtn.addEventListener("click", function highscore(){
    
    
if(highscoreInputName.value === "") {
        alert("Initials cannot be blank");
    return false;
}else{
var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = highscoreInputName.value.trim();
var currentHighscore = {
        name : currentUser,
    score : score
    };
    
gameoverDiv.style.display = "none";
highscoreContainer.style.display = "flex";
highscoreDiv.style.display = "block";
endGameBtns.style.display = "flex";
        
    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
}
});

// empties highscore list and makes new one
function generateHighscores(){
highscoreDisplayName.innerHTML = "";
highscoreDisplayScore.innerHTML = "";
var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
for (i=0; i<highscores.length; i++){
var newNameSpan = document.createElement("li");
var newScoreSpan = document.createElement("li");
newNameSpan.textContent = highscores[i].name;
newScoreSpan.textContent = highscores[i].score;
highscoreDisplayName.appendChild(newNameSpan);
highscoreDisplayScore.appendChild(newScoreSpan);
}
}

// shows highscores while hiding rest of content 
function showHighscore(){
startQuizDiv.style.display = "none"
gameoverDiv.style.display = "none";
highscoreContainer.style.display = "flex";
highscoreDiv.style.display = "block";
endGameBtns.style.display = "flex";
generateHighscores();
}

// checks answer to answered questions 
function checkAnswer(answer){
correct = quizQuestions[currentQuestionIndex].correctAnswer;
if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
score++;
    alert("Correct!");
    currentQuestionIndex++;
generateQuizQuestion();
    //shows answer is correct within result div.
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
            alert("WRONG!")
    currentQuestionIndex++;
            generateQuizQuestion();
    //shows answer is wrong within result div.
        }else{
    showScore();
}
}

// clears scoreboard and deletes saved scores from localstorage
function clearScore(){
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
    }
    
    // Resets quiz and takes you back to homescreen
    function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
    }

// starts quiz
startQuizButton.addEventListener("click",startQuiz);






