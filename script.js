//playGame();
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".btn");
let divForResult = document.querySelector(".result");
let runningScore = document.querySelector(".score");
let winnerDisplay = document.querySelector(".winner");
let weHaveAWinner = playerScore === 5 || computerScore === 5;

buttons.forEach((x) =>
  x.addEventListener("click", (e) => {
    
    if (weHaveAWinner) {
      

      return;
    }

    let playerSelection = e.currentTarget.dataset.value;
    let computerSelection = getComputerSelection();
    let round = playRound(playerSelection, computerSelection);

    switch (round) {
      case 1:
        playerScore++;
        divForResult.textContent = `Player wins this round. ${playerSelection} > ${computerSelection}`;
        runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        break;
      case -1:
        computerScore++;
        divForResult.textContent = `Computer wins this round. ${computerSelection} > ${playerSelection}`;
        runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        break;
      case 0:
        divForResult.textContent = `It's a tie this round. ${computerSelection} == ${playerSelection}`;
        runningScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    }

    weHaveAWinner = playerScore === 5 || computerScore === 5;
    if (weHaveAWinner) {
      let winnerName = playerScore === 5 ? "player" : "computer";
      winnerDisplay.textContent = `Game Over!!! the winner is ${winnerName}`;
    }
  })
);


function getComputerSelection() {
  let options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * options.length);

  return options[randomNum];
}

function playRound(humanChoice, computerChoice) {
  let result = 0;

  let humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanWins) result = 1;
  else if (humanChoice === computerChoice) result = 0;
  else result = -1;

  return result;
}
