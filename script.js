function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 
}

const choice = getComputerChoice();
console.log(choice);

function getHumanChoice(){
let userchoice = prompt("Rock, Paper, Scissors?")
let userInput = userchoice.toLowerCase();

console.log(userInput);
return userInput;

}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice){

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('Rock beats scissors'); 

        humanScore++
    }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('Paper beats rock'); 

        humanScore++

    }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('Scissors beats paper'); 

        humanScore++
    }else{
        computerScore++
    }
   
    console.log(humanScore);
    console.log(computerScore)
}


function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();
