
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection, round) {

    if (playerSelection === computerSelection) {
        console.log(`Round ${round}/5 : You throwed the same hand signal with the computer. It's a tie!`);
        return "tie";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`Round ${round}/5 : You win! Rock beats Scissors`);
        return "win";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Round ${round}/5 : You lose! Paper beats Rock`);
        return "lose";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`Round ${round}/5 : You win! Paper beats Rock`);
        return "win";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Round ${round}/5 : You lose! Scissors beats Paper`);
        return "lose";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`Round ${round}/5 : You win! Scissors beats Paper`);
        return "win";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Round ${round}/5 : You lose! Rock beats Scissors`);
        return "lose";
    } else {
        console.log("---Please enter a valid hand signal");
        return "invalid";
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    let round = 1;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your selection: ");
        const computerSelection = computerPlay();

        const result = playRound(playerSelection.toLowerCase(), computerSelection, round);
        if (result === "win") {
            playerScore++;
            round++;
        } else if (result === "lose") {
            computerScore++;
            round++;
        } else if (result === "tie") {
            tie++;
            round++;
        } else {
            i--;
        }
    }
    //results of each round
    console.log(`FINAL: Player Score: ${playerScore}, Computer Score: ${computerScore}, Ties: ${tie}`);

    if (playerScore > computerScore) {
        console.log("*You won the game!");
    } else if (playerScore < computerScore) {
        console.log("*You lost the game!");
    } else {
        console.log("*It's a tie!");
    }
}

game();
