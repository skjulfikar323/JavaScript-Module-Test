$(document).ready(function(){        
  $(".game-play-section").show();
  $(".user-win-section").hide();
  $(".user-Lost-section").hide();
  $(".Game-TieUp-section").hide();
  $(".Congras-section").hide();

$(".closedSection").click(function(){
  $("#closedrules").hide();
});

$(".btnrules").click(function(){
  $("#closedrules").show();
});

$("#btnnext").click(function(){
      $(".main-score-board").hide();
      $(".game-play-section").hide();
      $(".user-win-section").hide();
      $(".user-Lost-section").hide();
      $(".Game-TieUp-section").hide();
      $(".Congras-section").show();
});

$(".retrigame").click(function(){
      $(".game-play-section").show();
      $(".user-win-section").hide();
      $(".user-Lost-section").hide();
      $(".Game-TieUp-section").hide();
      $(".Congras-section").hide();
      $("#btnrule1").show();
      $("#closedrules").show();
});

$(".playAgain3").click(function(){
      $(".main-score-board").show();
      $(".game-play-section").show();
      $(".user-win-section").hide();
      $(".user-Lost-section").hide();
      $(".Game-TieUp-section").hide();
      $(".Congras-section").hide();
      $("#btnrule1").show();
      $("#closedrules").show();
});
});

// let userScore = 0;
// let computerScore = 0;
let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;

function userChoice(choice) {
  const computerChoice = getComputerChoice();
  const result = getResult(choice, computerChoice);
  updateScore(result);
  displayResult(choice, computerChoice, result);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    $(".game-play-section").hide();
    $(".user-win-section").hide();
    $(".user-Lost-section").hide();
    $(".Congras-section").hide();
    $("#btnrule1").hide();
    $(".Game-TieUp-section").show();
    $("#closedrules").hide();
    return 'draw';
  }
  else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    $(".game-play-section").hide(); 
    $(".Game-TieUp-section").hide();
    $(".user-Lost-section").hide();
    $(".Congras-section").hide();

    $("#closedrules").hide();
    $("#btnrule1").hide();
    $(".user-win-section").show();
    return 'win';
  } 
  else {
    $(".game-play-section").hide(); 
    $(".Game-TieUp-section").hide();
    $(".Congras-section").hide();
    $(".user-win-section").hide();

    $("#btnrule1").hide();
    $("#closedrules").hide();
    $(".user-Lost-section").show();
    return 'lose';
  }
}

function updateScore(result) {
  const userScoreElement = document.getElementById('userScore');
  const computerScoreElement = document.getElementById('computerScore');

  if (result === 'win') {
    userScore++;

  } else if (result === 'lose') {
    computerScore++;
  }

  userScoreElement.textContent = `${userScore}`;
  computerScoreElement.textContent = `${computerScore}`;

   // Update localStorage with the current scores
   localStorage.setItem('userScore', userScore.toString());
   localStorage.setItem('computerScore', computerScore.toString());
}

function displayResult(userChoice, computerChoice, result) {
  const resultElement = document.getElementById('result');
  const choicesMap = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
  };

  resultElement.textContent = `User chose ${choicesMap[userChoice]}, Computer chose ${choicesMap[computerChoice]}. You ${result}!`;

}

// Previous scores are displayed when the page loads
window.onload = function () {
  const userScoreElement = document.getElementById('userScore');
  const computerScoreElement = document.getElementById('computerScore');
  
  userScoreElement.textContent = `${userScore}`;
  computerScoreElement.textContent = `${computerScore}`;
};
