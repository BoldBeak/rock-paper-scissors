

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

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection) {
  // console.log(`You chose: ${playerSelection}, Computer chose = ${computerSelection}`);
  let resultOfRound = {"win": `You win! Your ${playerSelection} beat the computer's ${computerSelection}.`, "lose": `You lose! Computer's ${computerSelection} beat your ${playerSelection}.`, "tie": `It's a tie! You both selected ${playerSelection}. Try again!`};

  if (playerSelection === computerSelection) {
    tieScore++;
    return resultOfRound.tie;
  } else
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return resultOfRound.win;
  } else
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return resultOfRound.win;
  } else
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return resultOfRound.win;
  } else {
    computerScore++;
    return resultOfRound.lose;
  }
}

function game() {
  let i = 1;

  while (i < 6) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    let tally = `~~ Score Tally ~~ 
  You: ${playerScore}
  Computer: ${computerScore}
  Ties: ${tieScore}`;
    

  if (round.startsWith("You win!")) {
      //playerScore++;
      console.log(`Round ${i}:  ${round}`);
      console.log(tally);
    } else
    if (round.startsWith("You lose!")) {
      //computerScore++;
      console.log(`Round ${i}:  ${round}`);
      console.log(tally);
    } else
    if (round.startsWith("It's a tie!")) {
      //tieScore++;
      console.log(`Round ${i}:  ${round}`);
      console.log(tally);
    }  
    i++;
    // console.log(tally);
   
  }
  
  return(`p: ${playerScore}, c: ${computerScore}, t: ${tieScore}`);
}
const playerSelection = playerPlay();
const computerSelection = computerPlay();


//console.log(playRound(playerSelection, computerSelection));
console.log(game());