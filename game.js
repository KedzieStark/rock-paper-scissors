// Get DOM elements
const terminal = document.querySelector('#terminal');
const scoreboard = document.querySelector('#scoreboard');
const buttons = document.querySelectorAll('button');

// Initialize scores
let pScore = 0;
let cScore = 0;

// Game logic
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
    if ((pScore < 5) && (cScore < 5)){
        let cMove = computerPlay();
        terminal.textContent = (playRound(pMove, cMove));
        scoreboard.textContent = `Your score: ${pScore}. Computer score: ${cScore}`;
    } else if (pScore > cScore) {
        terminal.textContent = `End of game! You won!`;
    } else {
        terminal.textContent = `End of game! You lost. :(`
    }
}

let pMove;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        pMove = button.id;
        game();
    });
});


