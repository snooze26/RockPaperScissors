

const rockBtn = document.querySelector("#rock"); 
const paperBtn = document.querySelector("#paper"); 
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");

const resultsText = document.createElement("p");
const humanScoreLog = document.createElement("p");
const computerScoreLog = document.createElement("p");

let humanScore = 0;
let computerScore = 0; 




function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 

    console.log(choices);
}


function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){

        resultsText.textContent = "TIE!!";
        results.appendChild(resultsText);

    }else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')){

        humanScore++
        resultsText.textContent = `${humanChoice} beats ${computerChoice}`;
        results.appendChild(resultsText);
 

    }else{

        computerScore++
        resultsText.textContent = `${computerChoice} beats ${humanChoice}`;
        results.appendChild(resultsText);
        
    }

    humanScoreLog.textContent = `My score: ${humanScore}`;
    computerScoreLog.textContent = `Computer score: ${computerScore}`;
    
    results.appendChild(humanScoreLog);
    results.appendChild(computerScoreLog);

}




rockBtn.addEventListener("click", () =>{
    playRound("rock");
});
paperBtn.addEventListener("click", () =>{
    playRound("paper");
});
scissorsBtn.addEventListener("click", () =>{
    playRound("scissors");
});

/*
function playGame(){
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`My score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

}

playGame();
*/
