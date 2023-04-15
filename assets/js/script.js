console.log("Script linked");
var questionBank = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    answerA: "a. The <head>",
    answerB: "b. The <body>",
    answerC: "c. The <footer>",
    answerD: "d. Both <head> and <body>",
    correctAnswer: "d"
  },
  {
    question: "JavaScript is inserted into which HTML element?",
    answerA: "a. <scripting>",
    answerB: "b. <javascript>",
    answerC: "c. <script>",
    answerD: "d. <js>",
    correctAnswer: "c"
  },
  {
    question: "What element is used to store multiple values in a single variable",
    answerA: "a. Arrays",
    answerB: "b. Strings",
    answerC: "c. Variables",
    answerD: "d. Strings",
    correctAnswer: "a"
  },
  {
    question: "A variable is declared with which of the following?",
    answerA: "a. new",
    answerB: "b. $",
    answerC: "c. var",
    answerD: "d. <js>",
    correctAnswer: "c"
  },
  {
    question: "Which of the following is not an object?",
    answerA: "a. var obj = {}",
    answerB: "b. var obj = { name = 'Stephen'}",
    answerC: "c. var obj = { name: 'Stephen'}",
    answerD: "d. var obj = function() ",
    correctAnswer: "b"
  },
  {
    question: "What will 0 == '0' return?",
    answerA: "a. undefined",
    answerB: "b. True",
    answerC: "c. False",
    answerD: "d. 0",
    correctAnswer: "b"
  },
  {
    question: " Fill in the blank: JavaScript is a ____________ language.",
    answerA: "a. non case-sensitive",
    answerB: "b. manipulative",
    answerC: "c. statistic",
    answerD: "d. case-sensitive",
    correctAnswer: "d"
  },
]

var startBtn = document.getElementById("btn-start");
var mainContainer = document.getElementById("container");
var timer = document.getElementById("clock");
var countDown = document.getElementById("timer");
var quizContainer = document.getElementById("q-section");
var quesitonEL = document.getElementById("question");
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");
var choiceHolder = document.getElementById("choice-holder");
var choices = document.getElementsByClassName("abcd");
var statProgress = document.getElementById("status");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");

var finish = document.getElementById("finish");
var result = document.getElementById("result");
var submitScore = document.getElementById("submit");
var tryAgain = document.getElementById("retry");
var leaderBoard = document.getElementById("ranking");
var scoreList = document.getElementById("btn-high-scores");
var clearScore = document.getElementById("btn-clear")

var startCounter = 75;
var timeInterval;
var score = [];
var currentPosition = 0;  
var lastPosition = questionBank.length -1;




function renderCounter() {
  if (count <= questionTime) {
      counter.innerHTML = count;
      timeGauge.style.width = count * gaugeUnit;
      count++
  } else {
      count = 0;
  }
}


function startQuiz(){
  mainContainer.style.display="none"
  quizContainer.style.display="block"
  currentPosition = 0;
  startCounter = 75;
  showQuestion()

  timerInterval = setInterval(function() {
    startCounter--;
    countDown.textContent = startCounter;

    if (startCounter === 0 || startCounter < 0) {
        alert('OH NOOO ... Times up, Try Again!');
        clearInterval(timerInterval);
        showScore();
    }    
  }, 1000);
  finish.style.display="none";
  leaderBoard.style.display = "none"
}

function showQuestion() {
  var currentQuestion = questionBank[currentPosition];
  quesitonEL.textContent = currentQuestion.question;
  btnA.textContent = currentQuestion.answerA;
  btnB.textContent = currentQuestion.answerB;
  btnC.textContent = currentQuestion.answerC;
  btnD.textContent = currentQuestion.answerD;
};

function answerIsCorrect() {
  statProgress.style.display="block";
  right.style.display="block";
  wrong.style.display="none";
  // score +=5;
};
function answerIsWrong() {
  statProgress.style.display="block";
  wrong.style.display="block";
  right.style.display="none";
  startCounter -=10;
};

function chosen (answer){
  if (answer === questionBank[currentPosition].correctAnswer) {
    answerIsCorrect();
  }else { answerIsWrong();
  }


  if (currentPosition < lastPosition) {
    currentPosition++;
    showQuestion();
  } else {
    showScore();
  }
};

function showScore(){
  quizContainer.style.display="none";
  finish.style.display="block";
  statProgress.style.display="";
  leaderBoard.style.display = "block";
  clearInterval(timerInterval);
  countDown.textContent = ('Done');
  document.getElementById("result").innerHTML = "Your score is " + startCounter + " second(s)!";


};
function saveScore() {
  var playerName = document.getElementById("name");
  var scoreRanks = {
    name: playerName,
    score: startCounter
  };
  localStorage.setItem("scoreRanks", JSON.stringify(playerName))
}
function clearScores() {
  localStorage.setItem("scoreRanks", JSON.stringify([]));
  score
  viewRanks() ;
}
submitScore.addEventListener("click", saveScore);
clearScore.addEventListener("click",clearScores);


function getScore() {
  rankingEl.innerHTML = "";
  var loadScores = JSON.parse(localStorage.getItem("scoreRanks"))|| []; 
  loadScores.forEach(function(element){
    var newLi = document.createElement("li");
    newLi.textContent = element.name + ' - ' + element.score;
    rankingEl.appendChild(newLi);
  })

  if (!loadScores)
      loadScores = [];

    return loadScores;
}
function getScore(position) {
  var loadScore = loadScore();
  if (!loadScore)
    return null

  return loadScore[position];
}

function getScore(position, name, startCounter) {
  var loadScore = loadScore();
  if (!loadScore || !Array.isArray(loadScore))
  loadScore = [];

  loadScore.splice(position, 0, { name, startCounter })
  if (loadScore.length > loadScoreMaxCount)
  loadScore.pop();
}
function viewRanks() {
  mainContainer.style.display="none";
  quizContainer.style.display="none";
  finish.style.display="none";
  statProgress.style.display="none";
  leaderBoard.style.display = "block";
  getScore();
}

scoreList.addEventListener("click", viewRanks);
//restartQuiz
tryAgain.addEventListener("click", startQuiz);
// startQuiz()
startBtn.addEventListener("click", startQuiz);

var highScores = [];
var rankingEl = document.getElementById("ranking-list");

function updateScores () {
  var loadScores = getScore ();
  
  for ( var ranking = 1; ranking <= loadScoreMaxCount.length; ranking++) {
    var scoreEl = document.getElementById("ranking-list" + ranking).getElementsByClassName(""[0]);

    let score = scoreEl[ranking - 1];
    if (score) {
      scoreEl.innerHTML = ranking + ')' + score.playerName + ' - ' + score.correct + '/' + questionBank.length;
    }
    else {
      scoreEl.innerHTML = '';
    }

    highScores.forEach(function(element){
      var newLi = document.createElement('li');
      newLi.textContent = ele.name + ' - ' + ele.score;
      rankingEl.appendChild(newLi);
    })
    rankingEl.textContent = JSON.parse(localStorage.getItem("scoreRanks"));
  };
  
};
