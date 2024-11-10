
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

//final scores
let humanScore = 0;
let computerScore = 0;

function rpsRound () {
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
            rpsRound();
        } else {
            console.log(`You lose ${computerSelection} beats ${humanSelection}`);
            computerScore++;
            console.log(`human score: ${humanScore} and computer score: ${computerScore}`);
        }
            
}

let humanSelection = "";
let roundResult = document.querySelector("#roundResult");
let buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e)=>{
    switch(e.target.id){
        case("rock"):
        humanSelection = "rock";
        checkTheRound();
        break;
        case("paper"):
        humanSelection = "paper";
        checkTheRound();
        break;
        case("scissors"):
        humanSelection = "scissors";
        checkTheRound();
        break;
    }
});

function checkTheRound () {
    if((humanScore < 5) && (computerScore < 5)){
        rpsRound();
        roundResult.textContent = `human score:${humanScore} and computer score:${computerScore}`;
        }
        checkFinalResult();
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetBtn);

function resetBtn(){
    humanScore=0;
    computerScore=0;
    roundResult.textContent = "";
    finalResult.textContent = "";
}

let finalResult = document.querySelector("#finalResult");

function checkFinalResult() {
    if(computerScore === 5) {
        finalResult.textContent = `Computer wins`;
    } else if(humanScore === 5){
        finalResult.textContent = `Player wins`;
    }
}