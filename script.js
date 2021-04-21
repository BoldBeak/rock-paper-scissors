

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

console.log(computerPlay(), playerPlay());