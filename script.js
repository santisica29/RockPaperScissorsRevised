let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * options.length);

    return options[randomNum];
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors");

    return choice;
}

function playRound(humanChoice, computerChoice){

}