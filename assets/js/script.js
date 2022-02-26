var question = [
    {
        title: "Commonly used data types DO Not Include:",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ...",
        choice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ... when being assigned to variables",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];

var timeEl = document.querySelector("#time");
var timer;
var time = question.length * 10
var startBtn = document.querySelector("#startBtn");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var questionIndex = 0;
var initialEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit")
var answerCheckEl = document.querySelector("#check-answer");

var startQuiz = function() {
    var startQuizEl = document.getElementById("main-screen");
    startQuizEl.setAttribute("class", "clear");
    questionEl.removeAttribute("class");
    timer = setInterval(clock, 1000);
    timeEl.textContent = time;
    questionsQuiz();

};

var clock = function() {
    time--;
    timeEl.textContent = time;
    if(time<=0) {
        endQuiz();
    }
};

var questionsQuiz = function() {
    var currentQuestion = question[questionIndex];
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choice.forEach(function(choices, i) {
        var choicesBtn = document.createElement("button");
        choicesBtn.setAttribute("class", "multiple-choice");
        choicesBtn.setAttribute("value", choices);
        choicesBtn.textContent = choices;
        choicesBtn.onclick = clickQuestion;
        choicesEl.appendChild(choicesBtn);
    });
        
};

var clickQuestion = function() {
    if (this.value !== question[questionIndex].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }
        timeEl.textContent = time;
        answerCheckEl.textContent = "Wrong!";
    } 
        else {
        answerCheckEl.textContent = "Correct!";
        }

    answerCheckEl.setAttribute("class", "check-answer");
    setTimeout(function() {
        answerCheckEl.setAttribute("class", "check-answers");
    }, 1000);

    questionIndex++;

    if (questionIndex === question.length) {
        endQuiz();
    } 
    else {
        questionsQuiz();
    }
};

var endQuiz = function() {
    clearInterval(timer);
    var endEl = document.getElementById('final-screen');
    endEl.removeAttribute("class");
    var scoreEl = document.getElementById('final-score')
    scoreEl.textContent = time;
    questionEl.setAttribute("class", "clear")
};

startBtn.oneclick = startQuiz;