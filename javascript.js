
function randomNumber () {
    return Math.floor(Math.random()*3);
}

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

function getUserChoice () {
    const getUserChoice = prompt("rock, paper or scissors?");
    return getUserChoice;
}

//final scores

let humanScore = 0;
let computerScore = 0;


// calculate who is winning the round



function winningDecider () {

    
    const computerSelection = getComputerChoice();

    if ((humanSelection === "rock" && computerSelection === "scissors") 
        || (humanSelection === "paper" && computerSelection === "rock")
        || (humanSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You win ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
            console.log(`human score: ${humanScore} and computer score: ${computerScore}`);
        } else if (humanSelection === computerSelection) {
            console.log(`draw`);
        } else if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissors") {
            winningDecider();
        } else {
            console.log(`You lose ${computerSelection} beats ${humanSelection}`);
            computerScore++;
            console.log(`human score: ${humanScore} and computer score: ${computerScore}`);
        }
            
}



//make it 5 rounds
//i'm gonna implement loops in the next chapter

function playGame () {
    while((humanScore < 5) && (computerScore < 5)) {
        winningDecider();
    }
    console.log(`Your score ${humanScore}`);
    console.log(`Computer score ${computerScore}`);

}
let humanSelection = "";
let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e)=>{
    switch(e.target.id){
        case("rock"):
        humanSelection = "rock";
        if((humanScore < 5) && (computerScore < 5)){
        winningDecider();
        }
        break;
        case("paper"):
        humanSelection = "paper";
        if((humanScore < 5) && (computerScore < 5)){
        winningDecider();
        }
        break;
        case("scissors"):
        humanSelection = "scissors";
        if((humanScore < 5) && (computerScore < 5)){
        winningDecider();
        }
        break;
    }
})

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetBtn);

function resetBtn(){
    humanScore=0;
    computerScore=0;
}


//make a reset button
function resetTheGame () {
    humanScore = 0;
    computerScore = 0;
}
