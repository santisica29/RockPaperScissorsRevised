playGame();

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round;

  for (let i=0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    round = playRound(humanChoice, computerChoice);

    if (round === 0){
        console.log(`It's a tie, ${humanChoice} == ${computerChoice}`)
    } else if (round === 1){
        console.log(`Human Wins: ${humanChoice} > ${computerChoice}
    H:${humanScore} - C:${computerScore}`)
    } else {
        console.log(`Computer Wins: ${computerChoice} > ${humanChoice}
    H:${humanScore} - C:${computerScore}`)
    }
  }

  let winner = humanScore === 5 ? 'Human' : 'Computer';

  console.log(`The winner is ${winner} ${winner === 'Human' ? humanScore : computerScore}`)

}
