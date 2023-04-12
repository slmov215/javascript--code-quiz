console.log("Script linked")
var position;
var questionBank = [
  {
    prompt: "What to ask",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3"
  },
  {
    prompt: "What to 2",
    choices: ["6", "2", "13", "4"],
    correctAnswer: "4"
  }
]

var startBtn = document.getElementById("btn-start")


console.log(questionBank[0].choices[2])
var chosen = questionBank.correctAnswer;
  if(questionBank[0].correctAnswer === chosen){
  console.log('thats correct!');
}else{
  console.log('wrong!');

}
//Show the User the new QUestion

function startQuiz(){

  var mainContainer = document.getElementById("container")
  var quizContainer = document.getElementById("q-section")
  mainContainer.style.display="none"
  quizContainer.style.display="block"
  position = 0
  showQuestion()
}


function showQuestion() {
  var currentQuestion = questionBank[position]
  var quesitonEL = document.getElementById("question")

  quesitonEL.textContent = currentQuestion.prompt

  var buttonA = document.getElementById("a")
  var buttonB = document.getElementById("b")
  var buttonC = document.getElementById("c")
  var buttonD = document.getElementById("d")

  buttonA.textContent = currentQuestion.choices[0]
  buttonB.textContent = currentQuestion.choices[1]
  buttonC.textContent = currentQuestion.choices[2]
  buttonD.textContent = currentQuestion.choices[3]


  //somehow iterate through our array of questions

  var currentPrompt = currentQuestion.prompt //
// one of those is thorugh the index
var currentChoices = currentQuestion.choices;


var choiceHolder = document.getElementById("choice-holder")
for (let i = 0; i < currentChoices.length; i++) {
  console.log(currentChoices[i])

  // var choiceBtn = document.createElement("button")
  // choiceBtn.style.color = "blue"
  // choiceBtn.innerHTML = currentChoices[i]
  // choiceBtn.addEventListener("click", selectAnswer)
  // choiceHolder.append(choiceBtn)
}
  // somehow know what question we are at
  //that is my current index of my questions

  // 



  //what is the target element ("by id?")
  //What is the new HTML element I need to create
  //what will be the style of it??

  //What will be the element's conetent

  //Appendit to the target

}

// function selectAnswer(event){
//   event.preventDefault()
//   console.log(event.target)
//   console.log(event)
//   //do whatever we gott to do after linking the button
//   //that event will be a click
//   //we need to chekc if its right or wrong
//   //move on to the next question
//   //somehow change the quesiton OR INDEX
//   position += 1
//   showQuestion()
// }

// startQuiz()
startBtn.addEventListener("click", startQuiz)