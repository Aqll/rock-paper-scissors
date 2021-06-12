alert("This is a rock-paper-scissors game with 3 rounds.");

//Array of moves:
let moves = ['rock', 'paper', 'scissors'];


//Return a random move
let computer = () => moves[Math.floor(Math.random() * 3)]; 


function play(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) return "Tie";
    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper') return "Computer wins!";
        else return "Player wins!";
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock') return "Player wins!";
        else return "Computer wins!";
    }
    else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock') return "Computer wins!";
        else return "Player wins!";
    }

}


function game(){
    let playerScore = 0, computerScore = 0;

    for (let i = 0; i < 3; i++){
        let z = i+1;
        let playerSelection = window.prompt("Round "+ z +": Please enter rock, paper, or scissors");
        const computerSelection = computer();
        let winner = play(playerSelection, computerSelection);
        if (winner === 'Computer wins!') computerScore += 1;
        else if (winner === 'Player wins!') playerScore += 1;
        if (i === 0) console.log(i+1 + "st round: ");
        else if (i===1) console.log(i+1 + "nd round: ");
        else if (i===2) console.log(i+1 + "rd round: ");
        else console.log(i+1 + "th round: ");
        
        console.log("Computer chose: "+ computerSelection);
        console.log("Player chose: "+ playerSelection);
        console.log(winner);
        console.log("------------------------");
    }

    if (playerScore === computerScore) return "Tie out of the 5 rounds!";
    else if (playerScore > computerScore) return "Player wins out of the 5 rounds!!";
    else return "Computer wins out of the 5 rounds!";
    
}


console.log(game());