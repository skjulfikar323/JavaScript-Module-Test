let userScore = 0;
let computerScore = 0;

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
  if (userChoice === computerChoice) return 'draw';
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  const userScoreElement = document.getElementById('user-score');
  const computerScoreElement = document.getElementById('computer-score');

  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }

  userScoreElement.textContent = `User: ${userScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function displayResult(userChoice, computerChoice, result) {
  const resultElement = document.getElementById('result');
  const choicesMap = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
  };

  resultElement.textContent = `User chose ${choicesMap[userChoice]}, Computer chose ${choicesMap[computerChoice]}. You ${result}!`;

  // Optionally, you can add logic to reset the game after a certain number of rounds.
  // For example, if (userScore + computerScore === 10) resetGame();
}

// Optional: Add a function to reset the game if needed.
// function resetGame() {
//   userScore = 0;
//   computerScore = 0;
//   // Additional logic for resetting any other game-related variables or UI elements.
// }
