//create a function gameEngine() that compares three possible inputs. use userSelection and computerSelection as the parameters
        function gameEngine(userSelection, computerSelection) {
            if (userSelection === computerSelection) {
                alert("It's a draw. Play again");
            }  else if ((userSelection === "Rock") && (computerSelection === "Paper")) {
                alert("Computer chose paper. You lost");
            }  else if ((userSelection === "Rock") && (computerSelection === "Scissors")) {
                alert("Computer chose Scissors. You won.")
            }  else if ((userSelection === "Paper") && (computerSelection === "rock")) {
                alert("Computer chose rock. You won.")
            }  else if ((userSelection === "Paper") && (computerSelection === "Scissors")) {
                alert("Computer chose Scissors. You lost.")
            }  else if ((userSelection === "Scissors") && (computerSelection === "Rock")) {
                alert("Computer chose rock. You lose")
            }  else {
                alert("Computer chose paper. You win")
            }
        }
           //rock is greater than scissors, but weaker than paper.
           //paper is greater than rock, but weaker than scissors.
           //scissors is greater than paper, but weaker than rock.
        //ask user to select between rock, paper, or scissors and store the user's selection in a container.
        let userChoice = prompt("Choose between Rock, Paper, or Scissors");
        //make all user input uniform
        let trueUserInput = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
        //text usableInput
        console.log(trueUserInput);
        // let the computer make a random choice 
        let computerChoice = Math.floor(Math.random() * 3);
        //test computer input
        console.log(computerChoice);
        //store the computer's choice in another container
        if (computerChoice === 0) {
            trueComputerInput = "Rock";
        }  else if (computerChoice === 1) {
            trueComputerInput = "Paper";
        }  else {
            trueComputerInput = "Scissors";
        };
        //test trueComputerInput
        console.log(trueComputerInput);
        //call the aforementioned function using the selections as the arguments.
        gameEngine(trueUserInput, trueComputerInput)
        //alert the output of the function
        