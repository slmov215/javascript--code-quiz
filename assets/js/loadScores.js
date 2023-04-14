console.log("load scores linked")

//local storage look like?

// local storage will look like an array
// A highscore consists of a score and initials which is an object with two properties {
//   initials: "AG",
//   score: scoreTHeUserGot
// }
//since they are in an array, go ahead and iterate thorugh the highscores 

//
//what is the target element ("by id?")
//What is the new HTML element I need to create
//what will be the style of it??

//What will be the element's conetent

//Appendit to the target
var highScores = JSON.parse(localStorage.getItem("scoreRanks"));;
var rankingEl = document.getElementById("ranking-list");

var loadScores = function() { 
  rankingEl.innerHTML = "";
  
  for ( var i = 0; i < highScores.length; i++) {
    var highScores = highScores[i];

    rankingEl.textContent = JSON.parse(localStorage.getItem("scoreRanks"));
  }
    highScores = localStorage.getItem("scoreRanks");
    if (!highScores) {
        highScores = []
        var noScore = document.createElement("div");
        noScore.setAttribute("style", "text-align: center");
        noScore.textContent = "There are no scores yet!  Play the quiz and add your score!"
        document.getElementById("ranking-list").appendChild(noScore);

        return false;
    } else {
        rankingEl[0]
    }

    highScores = JSON.parse(localStorage.getItem("scoreRanks"));

    highScores.sort(sortScore);
}

var sortScore = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1;
    }
    return comparison;
}

loadScores();