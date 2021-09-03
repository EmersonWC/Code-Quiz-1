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







