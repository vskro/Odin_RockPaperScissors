const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a tie!";
    }
    else if (result == "Player"){
        return `Player wins! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock, paper, scissors; Shoot!");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playGame (){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    for (let i=0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    if (scorePlayer > scoreComputer){
        console.log("Player wins!");
    }
    else if (scoreComputer > scorePlayer){
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }
    console.log("Game Over!");

}

playGame();