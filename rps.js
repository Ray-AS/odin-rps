/*

getComputerChoice()
- No parameters
- Return rock, paper, or scissors randomly

playRound(playerSelection, computerSelection)
- Compare player & computer selection to determine winner
- Return a string stating the outcome
- Player selection case insensitive (toUpperCase)

game()
- No parameters
- Loop 5 times, calling the playRound function on each iteration
- Have two counters to keep track of score
- State winner or loser at the end

*/

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
  }
  else if ((playerSelection === "rock" && computerSelection === "paper") || 
           (playerSelection === "paper" && computerSelection === "scissors") ||
           (playerSelection === "scissors" && computerSelection === "rock"))
  {
    playerWin = false;
  }

  return tie ? `Tie! Both of you chose ${computerSelection}` : 
         playerWin ? `You win! Your ${playerSelection} beats the computer's ${computerSelection}!` : 
         `You lose! The computer's ${computerSelection} beats your ${playerSelection}!`;
}