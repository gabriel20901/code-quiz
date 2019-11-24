<div id="quizz"></div>
<button id="submit">Get Results</button>
<div id="results"></div>
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
	function showQuestions(questions, quizContainer) {
	}
	function showResults(questions, quizContainer, resultsContainer) {
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	};
}
let questions = []

    {

        question ["What does HTML stand for?"],

        choiceA  ["Correct"],

        choiceB  ["Wrong"],

        choiceC  ["Wrong"],

        correct ["A"],

	},{

        question  ["What does CSS stand for?"],

        choiceA  ["Wrong"],

        choiceB  ["Correct"],

        choiceC  ["Wrong"],

        correct  ["B"]

	},{
	

        question  ["What does JS stand for?"],

        choiceA  ["Wrong"],

        choiceB  ["Wrong"],

		choiceC  ["Correct"],
		
        correct  ["C"]
	}
	
];

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

function showQuestions(questions, quizContainer){
	var output = [];
	var answers;
	for(var i=0; i<questions.length; i++){
		answers = [];
		for(letter in questions[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ question[i].correct[letter],=
				+ '</label>'
			);
        }
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	quizContainer.innerHTML = output.join('');
}


showQuestions(questions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
	for(var i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		}
		else
			answerContainers[i].style.color = 'red';
		}
	}
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
};


submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

start.addEventListener("click",startQuiz);

function renderQuestion(){

    let q = questions[runningQuestion];

   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

	choiceC.innerHTML = q.choiceC;
	

	function renderProgress(){

		for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
	
			progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
	
		}
	
	}
