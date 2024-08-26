function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]; 
}

const choice = getComputerChoice();
console.log(choice);

userchoice = prompt("Rock, Paper, Scissors?")
console.log(userchoice);