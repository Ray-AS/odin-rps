const NUM_ROUNDS = 5;
let PLAYER_WINS = 0;
let COMPUTER_WINS = 0;

function getComputerChoice()
{
  const choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);

  return choices[choice];
}

function playRound(playerSelection, computerSelection)
{
  let playerWin = true;
  let tie = false;

  if (playerSelection === computerSelection)
  {
    playerWin = false;
    tie = true;
    PLAYER_WINS++;
    COMPUTER_WINS++;
  }
  else if ((playerSelection === "rock" && computerSelection === "paper") || 
           (playerSelection === "paper" && computerSelection === "scissors") ||
           (playerSelection === "scissors" && computerSelection === "rock"))
  {
    playerWin = false;
    COMPUTER_WINS++;
  }
  else
  {
    PLAYER_WINS++;
  }

  return tie ? `Tie! Both of you chose ${computerSelection}` : 
         playerWin ? `You win! Your ${playerSelection} beats the computer's ${computerSelection}!` : 
         `You lose! The computer's ${computerSelection} beats your ${playerSelection}!`;
}

function game()
{
  let playerChoice;
  let computerChoice;

  for(let i = 0; i < NUM_ROUNDS; i++)
  {
    playerChoice = prompt("What is your choice? [rock | paper | scissors]").toLowerCase();
    computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
  }

  console.log(logWinner());

  PLAYER_WINS = 0;
  COMPUTER_WINS = 0;
}

function logWinner()
{
  let winner;

  if(PLAYER_WINS === COMPUTER_WINS)
  {
    winner = "You both tie!";
  }
  else if (PLAYER_WINS > COMPUTER_WINS)
  {
    winner = "You win!";
  }
  else
  {
    winner = "You lose!";
  }

  return winner;
}