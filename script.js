

function getComputerChoice() {
    const gameItems = [
        "Rock",
        "Paper",
        "Scissors"
    ]    
   return gameItems[Math.floor(Math.random()*gameItems.length)];

}

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection) {
    return "It's a tie! You both picked the same one"
} else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    return "Player wins! Rock beats Scissors"
} else if (playerSelection === "Paper" && computerSelection === "Rock"){
return "Player wins! Paper beats Rock"  
}  else if(playerSelection === "Scissors" && computerSelection === "Paper") {
return "Player wins! Scissors beat paper"
} else {
    return `Computer wins ${computerSelection} beats ${playerSelection}`
}
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection))