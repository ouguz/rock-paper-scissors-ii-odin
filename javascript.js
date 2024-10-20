//get a random number

function randomNumber () {
    return Math.floor(Math.random()*3);
}

//match the random number with every possible option that computer's can get

function getComputerChoice () {
    const getRandomNum = randomNumber();
    // console.log(getRandomNum);
    if(getRandomNum === 0) {
        return "rock";
    } else if (getRandomNum === 1) {
        return "paper";
    } else if (getRandomNum === 2) {
        return "scissors";
    }
}

// console.log(getComputerChoice());

// get user's choice 

function getUserChoice () {
    const getUserChoice = prompt("rock, paper or scissors?");
    return getUserChoice;
}

//declare score variables

let humanScore = 0;
let computerScore = 0;


// calculate who is winning the round



function winningDecider () {

    const humanSelection = getUserChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    if ((humanSelection === "rock" && computerSelection === "scissors") 
        || (humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You win ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
        } else if (humanSelection === computerSelection) {
            console.log(`draw`);
        } else if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissors") {
            winningDecider();
        } else {
            console.log(`You lose ${computerSelection} beats ${humanSelection}`);
            computerScore++;
        }
            
}



//make it 5 rounds
//i'm gonna implement loops in the next chapter

function playGame () {
    winningDecider ();
    winningDecider ();
    winningDecider ();
    winningDecider ();
    winningDecider ();
    console.log(`Your score ${humanScore}`);
    console.log(`Computer score ${computerScore}`);

}


//make a reset button
function resetTheGame () {
    humanScore = 0;
    computerScore = 0;
}
