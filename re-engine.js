alert("You're going to play 5 rounds against the computer.");
alert("Whoever wins more rounds wins overall");


 
 function gameEngine(userSelection, computerSelection) {
            if (userSelection === computerSelection) {
                alert("this was a draw, play again");
                return gameEngine(askUserInput(),askComputerInput())
            }  else if ((userSelection === "Rock") && (computerSelection === "Paper")) {
                alert("Computer chose paper. You lost");
                return 0;
            }  else if ((userSelection === "Rock") && (computerSelection === "Scissors")) {
                alert("Computer chose Scissors. You won.")
                return 1;
            }  else if ((userSelection === "Paper") && (computerSelection === "rock")) {
                alert("Computer chose rock. You won.")
                return 1;
            }  else if ((userSelection === "Paper") && (computerSelection === "Scissors")) {
                alert("Computer chose Scissors. You lost.")
                return 0;
            }  else if ((userSelection === "Scissors") && (computerSelection === "Rock")) {
                alert("Computer chose rock. You lose")
                return 0;
            }  else {
                alert("Computer chose paper. You win")
                return 1;
            }
        }

function askUserInput() {
    let userChoice = prompt("Choose between Rock, Paper, or Scissors");
    let trueUserInput = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
    // console.log(trueUserInput);
    return trueUserInput;
}

function askComputerInput() {
     let trueComputerInput;
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice)
      if (computerChoice === 0) {
            trueComputerInput = "Rock";
        }  else if (computerChoice === 1) {
            trueComputerInput = "Paper";
        }  else {
            trueComputerInput = "Scissors";
        };
    // console.log(trueComputerInput);
    return trueComputerInput;
}

let value1 = gameEngine(askUserInput(),askComputerInput());
console.log(value1);
let value2 = gameEngine(askUserInput(),askComputerInput());
console.log(value2);
let value3 = gameEngine(askUserInput(),askComputerInput());
console.log(value3);
let value4 = gameEngine(askUserInput(),askComputerInput());
console.log(value4);
let value5 = gameEngine(askUserInput(),askComputerInput());
console.log(value5);

let finalGameCount = value1 + value2 + value3 + value4 + value5;

if (finalGameCount < 3) {
    alert("You lost the game ")
} else {
    alert("You won the game")
}

//gameEngine(askUserInput(),askComputerInput());

//get the result from the gameEngine return.
//store the return value somewhere
//repeat 4 timees with different container names
//add the values together,
//if values not more than a figure, alert "you lost" else Alert "you won".

        
