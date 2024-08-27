function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 

    console.log(choices);
}


function getHumanChoice(){
let userchoice = prompt("Rock, Paper, Scissors?")
let userInput = userchoice.toLowerCase();

console.log(userInput);
return userInput;

}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice){

    if(humanChoice === computerChoice){
        console.log ('its a tie')
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`${humanChoice} beats ${computerChoice}`); 

        humanScore++
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log(`${humanChoice} beats ${computerChoice}`); 

        humanScore++

    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`${humanChoice} beats ${computerChoice}`); 

        humanScore++
    }else{
        console.log(`${computerChoice} beats ${humanChoice}`)
        computerScore++
    }


}


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
