let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");
let divForResult = document.querySelector(".result");
let runningScore = document.querySelector(".score");
let winnerDisplay = document.querySelector(".winner");
const WINNING_SCORE = 5;

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    if (isThereAWinner()) return;

    let playerSelection = e.currentTarget.dataset.value;
    let computerSelection = getComputerSelection();
    let round = playRound(playerSelection, computerSelection);

    switch (round) {
      case 1:
        playerScore++;
        displayWinner("Player", playerSelection, computerSelection);
        break;
      case -1:
        computerScore++;
        displayWinner("Computer", computerSelection, playerSelection);
        break;
      case 0:
        displayWinner("tie", playerSelection, computerSelection);
        break;
    }

    if (isThereAWinner()) {
      let winnerName = playerScore === 5 ? "player" : "computer";
      winnerDisplay.textContent = `Game Over!!! the winner is ${winnerName}`;
      disableButtons();
    }
  })
);

resetBtn.addEventListener("click", resetGame);

function disableButtons() {
  buttons.forEach((btn) => (btn.disabled = true));
}

function enableButtons() {
  buttons.forEach((btn) => (btn.disabled = false));
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;

  winnerDisplay.textContent = "";
  divForResult.textContent = `Let's start a new game`;
  runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  enableButtons();
}
function displayWinner(winnerName, winnerSelection, loserSelection) {
  if (winnerName === "tie") {
    divForResult.textContent = `It's a tie this round. ${winnerSelection} == ${loserSelection}`;
  } else {
    divForResult.textContent = `${winnerName} wins this round. ${winnerSelection} > ${loserSelection}`;
  }

  runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function isThereAWinner() {
  return playerScore === WINNING_SCORE || computerScore === WINNING_SCORE;
}

function getComputerSelection() {
  let options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * options.length);

  return options[randomNum];
}

function playRound(humanSelection, computerSelection) {
  let result = 0;
  humanSelection = humanSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();

  let humanWins =
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock");

  if (humanWins) result = 1;
  else if (humanSelection === computerSelection) result = 0;
  else result = -1;

  return result;
}
