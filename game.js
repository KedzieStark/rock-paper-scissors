function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return ("rock");
    } else if (play == 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return `"${playerSelection}" isn't a valid  move. Pick rock, paper, or scissors.`;
    }
    else if (playerSelection == computerSelection) {
        return `It's a tie! You both picked ${playerSelection}.`;
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        cScore ++;
        return `You lose-- ${computerSelection} beats ${playerSelection}.`;
    }
    else {
        pScore ++;
        return `You win-- ${playerSelection} beats ${computerSelection}.`;
    }
}

function game() {
    alert(`Want to play rock-paper-scissors?`);
    alert(`We'll play best of five!`);
    for (let i = 1; i <= 5; i++) {
        let pMove = prompt("Pick a move");
        let cMove = computerPlay();
        console.log(playRound(pMove, cMove));
        console.log(`Your score: ${pScore}. Computer score: ${cScore}`);
        if (pScore >= 3) {
            console.log(`You win!`);
            break;
        }
        else if (cScore >= 3) {
            console.log(`You lose!`);
            break;
        }
        else if (cScore == 2 && pScore == 2) {
            console.log(`Tie!`);
            break;
        }
    }
    console.log(`End of game!`);
    if (cScore > pScore) {
        console.log(`You lost!`);
    }
    else {
        console.log(`You won!`);
    }
}

let pScore = 0;
let cScore = 0;
game();