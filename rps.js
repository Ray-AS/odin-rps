let PLAYER_WINS = 0;
let COMPUTER_WINS = 0;

const choices = document.querySelectorAll('.choices > button');
const log = document.querySelector('.log');
const playerTally = document.querySelector('.playerScore');
const computerTally = document.querySelector('.computerScore');
const winText = document.querySelector('.winner');
const repeat = document.querySelector('.repeat');

function game(playerSelection)
{
  let outcome = playRound(playerSelection, getComputerChoice());
  updateLog(outcome);
  updateTally();
  
  let winner = checkWinner();
  if (winner)
  {
    displayWinner(winner);
    endGame();
    playAgain();
  }
}

function getComputerChoice()
{
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
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
    COMPUTER_WINS++;
  }
  else
  {
    PLAYER_WINS++;
  }

  return tie ? `Tie! Both of you chose ${computerSelection}.` : 
         playerWin ? `You win! Your ${playerSelection} beats the computer's ${computerSelection}!` : 
         `You lose! The computer's ${computerSelection} beats your ${playerSelection}!`;
}

function updateLog(outcome) 
{
  log.removeAttribute('hidden');
  const para = document.createElement('p');
  para.textContent = outcome;
  para.classList.add('logText');
  log.appendChild(para);
}

function updateTally()
{
  playerTally.textContent = PLAYER_WINS;
  computerTally.textContent = COMPUTER_WINS;
}

function checkWinner()
{
  return (PLAYER_WINS < 5 && COMPUTER_WINS < 5) ? false :
         (PLAYER_WINS === 5) ? 'player' : 'computer';
}

function displayWinner(winner) 
{
  if(winner == 'computer')
  {
    winText.textContent = 'Computer Wins!';
  }
  else
  {
    winText.textContent = 'You Win!';
  }
}

function endGame()
{
  choices.forEach(choice => choice.disabled = true);
}

function playAgain()
{
  const btn = document.createElement('button');
  btn.textContent = 'Play Again';
  btn.classList.add('replay');
  repeat.appendChild(btn);

  const replay = document.querySelector('.replay');
  replay.addEventListener('click', () => window.location.reload());
}

choices.forEach(choice => {
  choice.addEventListener('click', (e) => game(e.currentTarget.value));
});
