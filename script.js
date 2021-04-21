

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  //let playerInput = prompt(Choose: Rock, Paper, or Scissors);
  //let lowerInput = playerInput.toLowerCase();
  //return lowerInput;

  // ***** Random for setup/testing *****
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let scores = {"player": 0, "computer": 0, "tie": 0};
let playerScore = scores.player;
let computerScore = scores.computer;
let tieScore = scores.tie;

function playRound(playerSelection, computerSelection) {
  let resultOfRound = {"win": `You win! Your ${playerSelection} beat the computer's ${computerSelection}.`, "lose": `You lose! Computer's ${computerSelection} beat your ${playerSelection}.`, "tie": `It's a tie! You both selected ${playerSelection}. Try again!`};
}



console.log(computerPlay(), playerPlay());