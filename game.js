//create function that returns rock paper or scissors...


//create a new function called computerPlay
//generate a random number 1-3
//if 1, return Rock
//else if 2, return Paper
//else 3, return Scissors

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
