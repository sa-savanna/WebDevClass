var element = document.getElementById("question");
class App { 
    populate(){
        if(quiz.isEnded()){
            showScores();
        }else{
            element.innerHTML = quiz.getQuestionIndex().text;
            var choices = quiz.getQuestionIndex().choices;
            
        }
    }
}
function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        
        

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = `<h1>Result</h1><br><h2><bold>Your score is</bold> ${quiz.score}</h2>`;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    {
        "text": "Which one is not an object oriented programming language?",
        "choices": [
            "Java",
            "C#",
            "C++",
            "C"
        ],
        "answer": "C"
    },
    {
        "text": "Which language is used for styling web pages?",
        "choices": [
            "HTML",
            "JQuery",
            "CSS",
            "XML"
        ],
        "answer": "CSS"
    },
    {
        "text": "There are ____ main components of object oriented programming.",
        "choices": [
            "1",
            "6",
            "2",
            "4"
        ],
        "answer": "4"
    },
    {
        "text": "Which language is used for web apps?",
        "choices": [
            "PHP",
            "Python",
            "Javascript",
            "All"
        ],
        "answer": "All"
    },
    {
        "text": "MVC is a ____.",
        "choices": [
            "Language",
            "Library",
            "Framework",
            "All"
        ],
        "answer": "Framework"
    }
]
let LocalQuestions = []
questions.forEach((n) => {
    // console.log(n)
    LocalQuestions.push(new Question(n.text, n.choices, n.answer))

})
console.log(LocalQuestions)
// create quiz
var quiz = new Quiz(LocalQuestions);



populate();
