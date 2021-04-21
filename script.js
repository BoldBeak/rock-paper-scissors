

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  //let playerInput = prompt(Choose: Rock, Paper, or Scissors);
  //let lowerInput = playerInput.toLowerCase();
  //return lowerInput;

  // ***** Random for setup/testing *****
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  console.log("p = " + playerSelection, "c = " + computerSelection);
  let resultOfRound = {"win": `You win! Your ${playerSelection} beat the computer's ${computerSelection}.`, "lose": `You lose! Computer's ${computerSelection} beat your ${playerSelection}.`, "tie": `It's a tie! You both selected ${playerSelection}. Try again!`};

  if (playerSelection === computerSelection) {
    return resultOfRound.tie;
  } else
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return resultOfRound.win;
  } else
  if (playerSelection === "paper" && computerSelection === "rock") {
    return resultOfRound.win;
  } else
  if (playerSelection === "scissors" && computerSelection === "paper") {
        return resultOfRound.win;
  } else {
    return resultOfRound.lose;
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));