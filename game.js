//create function that returns rock paper or scissors...
function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        console.log("Rock");
    } else if (play == 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

computerPlay();

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