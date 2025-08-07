let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 100; i++) {
  console.log(playRound(getHumanChoice(), getComputerChoice()));

  if (humanScore === 5 || computerScore === 5){
    break;
  }
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * options.length);

  return options[randomNum];
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper or scissors").toLowerCase();

  return choice;
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  let humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanWins) {
    humanScore++;
    result = `Human Wins: ${humanChoice} > ${computerChoice}
    H:${humanScore} - C:${computerScore}`;
  } else if (humanChoice === computerChoice) {
    result = `It's a tie, ${humanChoice} == ${computerChoice}`;
  } else {
    computerScore++;
    result = `Computer Wins: ${computerChoice} > ${humanChoice}
    H:${humanScore} - C:${computerScore}`;
  }

  return result;
}
