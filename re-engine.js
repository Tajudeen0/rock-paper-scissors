
//variables
const picks = ["rock", "paper", "scissors"];
let usrIn;
let comIn;
let usrScr = 0;    
let comScr = 0;
let drawCount = 0;
let winner;






//create the buttons
const rock = document.createElement("button");
rock.id = "rck";
rock.textContent = "rock";
const paper = document.createElement("button");
paper.id = "ppr";
paper.textContent = 'paper'
const scissors = document.createElement("button");
scissors.id = "scrs";
scissors.textContent = 'scissors';




//append the buttons to the document
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);



//add event listeners
rock.addEventListener('click', e => {
    let usrIn = "rock";
    gameLogic(usrIn);
});

paper.addEventListener('click', e => {
    let usrIn = "paper";
    gameLogic(usrIn);
});

scissors.addEventListener('click', e => {
    let usrIn = "scissors";
    gameLogic(usrIn);
});









//create game logic 
function gameLogic(usrIn) {
        results.textContent = ""

    comIn = picks[getRandomInt(3)];
    if (usrIn == comIn) {
        drawCount += 1;
    }
        else if ((usrIn == "paper" && comIn == "rock") || (usrIn == "rock" && comIn == "scissors") || (usrIn == "scissors" && comIn == "paper")) {
        usrScr += 1;
        
    }   else {
        comScr += 1;
    }
    console.log(usrIn == comIn);
    console.log(comIn,usrIn)
    console.log(drawCount)
    console.log(comScr)
    console.log(usrScr)
    comChoice.textContent = "computer chose " + comIn + "."
    scoreCard.textContent = "The current score is: Computer (" + comScr + "), and you (" + usrScr +").";
    if ((comScr === 5) || (usrScr === 5) ) {
        results.textContent = (comScr < usrScr? "you won. Click any button to restart" : "You lost. Click any button to restart");
        comScr = 0;
        usrScr = 0;
        drawCount = 0;
        ;
    }
    
} 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//display results
let main = document.createElement("div");
main.classList.add("main");

let comChoice = document.createElement("p")
comChoice.classList.add("comChoice")

let scoreCard = document.createElement("p");
scoreCard.classList.add("score");

let results = document.createElement("h3");

document.body.appendChild(main);
main.appendChild(comChoice)
main.appendChild(scoreCard)
main.appendChild(results)
