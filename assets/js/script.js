console.log("Script linked")
var position;  
var mainContainer = document.getElementById("container")
var quizContainer = document.getElementById("q-section")
var quesitonEL = document.getElementById("question")
var buttonA = document.getElementById("a")
var buttonB = document.getElementById("b")
var buttonC = document.getElementById("c")
var buttonD = document.getElementById("d")
var choiceHolder = document.getElementById("choice-holder")
var choices = document.getElementsByClassName("abcd")
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
  mainContainer.style.display="none"
  quizContainer.style.display="block"
  position = 0
  showQuestion()
}


function showQuestion() {
  var currentQuestion = questionBank[position]
  quesitonEL.textContent = currentQuestion.prompt
  buttonA.textContent = currentQuestion.choices[0]
  buttonB.textContent = currentQuestion.choices[1]
  buttonC.textContent = currentQuestion.choices[2]
  buttonD.textContent = currentQuestion.choices[3]

  var currentChoices = currentQuestion.choices;
  //somehow iterate through our array of questions
  for (let i = 0; i < currentChoices.length; i++) {
    // console.log(currentChoices[i])
  var currentPrompt = currentQuestion.prompt //
// one of those is thorugh the index
}
function addListeners () {
  for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener('click', nextQuestion)
  }
}

function nextQuestion(event) {
  console.log(event.target.textContent);
  // console.log(quizQuestions[position].answer)
  //if the answer(target) is correct
  let isCorrect = event.target.textContent.trim() === quizQuestions[position].answer
  if (!isCorrect) {
      // console.log(e.target.textContent)
      secondsLeft-=10;
      timerButton.textContent = secondsLeft + ' Seconds left'
  } 
  //if incorrect take out 10 seconds from clock
  position++;
  //go to the next question -
      //update current index
  if (position < quizQuestions.length)  {
      questions.textContent = quizQuestions[position].que
      setAnswers(quizQuestions[position].options)
      outcome.textContent = isCorrect ? 'Correct' : 'Wrong';
      outcome.classList.remove('hidden')
  } else {
      //go to the end
      clearInterval(timerInterval)
      resultPage.classList.remove('hidden')
      questions.classList.add('hidden')
      listOfAnswers.classList.add('hidden')
      score.textContent = secondsLeft
  }
      //if the index is equal to the length we go to the end (results) else if not equal do next steps
      //update text content for question
      //update text for answers

}



  // var choiceBtn = document.createElement("button")
  // choiceBtn.style.color = "blue"
  // choiceBtn.innerHTML = currentChoices[i]
  // choiceBtn.addEventListener("click", selectAnswer)
  // choiceHolder.append(choiceBtn)

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