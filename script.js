//playGame();

let buttons = document.querySelectorAll('.btn');

buttons.forEach(x => x.addEventListener('click', (e) => {
  let playerSelection = e.currentTarget.dataset.value;
  let computerSelection = getComputerSelection();
  playRound(playerChoice, computerSelection);
}))

function getComputerSelection() {
  let options = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * options.length);

  return options[randomNum];
}

function getHumanSelection() {
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
    let humanChoice = getHumanSelection();
    let computerChoice = getComputerSelection();
    round = playRound(humanChoice, computerChoice);

    if (round === 0){
        console.log(`It's a tie, ${humanChoice} == ${computerChoice}\nH:${humanScore} - C:${computerScore}`)
    } else if (round === 1){
        humanScore++;
        console.log(`Human Wins: ${humanChoice} > ${computerChoice}
    H:${humanScore} - C:${computerScore}`)
    } else {
        computerScore++;
        console.log(`Computer Wins: ${computerChoice} > ${humanChoice}
    H:${humanScore} - C:${computerScore}`)
    }
  }

  let winner = humanScore > computerScore ? 'Human' : 'Computer';

  console.log(`The winner is ${winner} - ${winner === 'Human' ? humanScore : computerScore}`)

}
