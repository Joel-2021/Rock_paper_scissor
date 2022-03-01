var buttons = document.querySelectorAll(".circle");
var game=document.querySelector(".game")
var yourMove;
var moveName;
var comp;
// const winningCombinations=[{"yourMove":"rock","compMove":"scissor"},
//                         {"yourMove":"scissor","compMove":"paper"},
//                         {"yourMove":"paper","compMove":"rock"}];
var yourCombination;
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    yourMove = button.parentElement;
    moveName = yourMove.className;
    computerMove();
  });
});

var rules=document.querySelector(".rules")
rules.addEventListener("click",openWindow)
function openWindow() {
  game.style="filter:blur(10px)"
  document.querySelector(".rules_window").style.display = "block";
}
var button=document.querySelector("button")
button.addEventListener("click",closeWindow)
function closeWindow() {
  game.style="filter:none"

  document.querySelector(".rules_window").style.display = "none";
}

function computerMove() {
  var random = Math.floor(Math.random() * 3);
 comp = document.querySelectorAll(".circle");
  comp = comp[random];
  compMove = comp.parentElement.className;
  // yourCombination={"yourMove":moveName,"compMove":compMove}
  console.log(yourMove)
  console.log(compMove);
  checkResult(compMove);
}

function checkResult(compMove) {
  var score = document.querySelector(".score");
  scoreText = parseInt(score.innerHTML);

  if (moveName === compMove) {
    console.log("tie");
    tie()
  } else if (moveName === "rock") {
    if (compMove == "scissor") {
      console.log("you win");
      win()
    } else {
      lose()
      if (scoreText > 0) {
        score.innerHTML = scoreText - 1;
      }
    }
  } else if (moveName === "paper") {
    if (compMove == "rock") {
      console.log("you win");
      win()
      score.innerHTML = scoreText + 1;
    } else {
      lose()
      console.log("you lose");
      if (scoreText > 0) {
        score.innerHTML = scoreText - 1;
      }
    }
  } else if (moveName === "scissor") {
    if (compMove == "paper") {
      console.log("you win");
      win()
      score.innerHTML = scoreText + 1;
    } else {
      lose()
      console.log("you lose");
      if (scoreText > 0) {
        score.innerHTML = scoreText - 1;
      }
    }
  }
}

function win(){
    var score = document.querySelector(".score");
    scoreText = parseInt(score.innerHTML);
    score.innerHTML = scoreText + 1;
    yourMove.children[0].style.backgroundColor="#90EE90"
    comp.style.backgroundColor="#FAA0A0"
    setTimeout( function(){
      yourMove.children[0].style.backgroundColor="white"
      comp.style.backgroundColor="white"
     }, 1000)
}
function lose(){
   yourMove.children[0].style.backgroundColor="#FAA0A0"
    comp.style.backgroundColor="#90EE90"
    setTimeout( function(){
      yourMove.children[0].style.backgroundColor="white"
      comp.style.backgroundColor="white"}, 1000)
}
function tie(){
  
    yourMove.children[0].style.backgroundColor="#89CFF0"
    comp.style.backgroundColor="#89CFF0"
    setTimeout( function(){
      yourMove.children[0].style.backgroundColor="white"
      comp.style.backgroundColor="white"}, 1000)
}
