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

