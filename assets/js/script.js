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

console.log(questionBank[0].choices[2])
//Show the User the new QUestion

function startQuiz(){
  //happen when the user clicks the start button
  position = 0
  showQuestion()
}

function showQuestion() {
var currentQuestion = questionBank[position]
  //somehow iterate through our array of questions

  var currentPrompt = currentQuestion.prompt
// one of those is thorugh the index
var currentChoices = currentQuestion.choices
var choiceHolder = document.getElementById("choice-holder")
for (let i = 0; i < currentChoices.length; i++) {
  var choiceBtn = document.createElement("button")
  choiceBtn.style.color = "blue"
  choiceBtn.innerHTML = currentChoices[i]
  choiceBtn.addEventListener("click", selectAnswer)
  choiceHolder.append(choiceBtn)
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

function selectAnswer(event){
  event.preventDefault()
  console.log(event.target)
  console.log(event)
  //do whatever we gott to do after linking the button
  //that event will be a click
  //we need to chekc if its right or wrong
  //move on to the next question
  //somehow change the quesiton OR INDEX
  position += 1
  showQuestion()
}

startQuiz()