//create function that returns rock paper or scissors...
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

//write a function that plays a single round...

//create playRound function
//accept two parameters-- playerSelection and computerSelection
//ask player for playerSelection
    //convert players input to lowercase
    //if input unacceptable, ask again

//if input is acceptable...
//compare the two parameters
//if  playerSelection == computerSelection, call a tie
    //print 'you both called (selection)
//if (pS = rock AND cS = paper) OR (pS = paper AND cS = scissors) OR (pS = scissors AND cS = rock)
    //print 'you lose! %{cS} beats %{pS}'
//else
    //print 'you win! %{pS} beats %{cS}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
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

//write a function that plays 5 rounds of rock paper scissors
// create function game()
//create a loop that will run 5 times
//on each loop, run playRound()
//record winner of each round
//if playerScore reaches >= 3 return "you won" and break out of loop
//if computerScore reaches >=3 return "you lost" and break out of loop

function game() {
    alert(`Want to play rock-paper-scissors?`);
    alert(`We'll play best of five!`);
    for (let i = 1; i <= 5; i++) {
        let pMove = prompt("Pick a move");
        let cMove = "scissors";
        // let cMove = computerPlay();
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
    }

}

let pScore = 0;
let cScore = 0;
game();