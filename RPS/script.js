
const totalScore = {computerScore: 0, playerScore: 0}
let roundCount;
let playerWins;
let computerWins;
let maxRounds;

function setRounds(){
  var totalRounds = document.getElementById('bestOf');
  if (totalRounds.checked !== true) {
    maxRounds = 2
  } else 
    maxRounds = 1
}

function getComputerChoice() {
  let rpsChoice = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoice[Math.floor(Math.random() * 3)]
  return computerChoice
};

function getResult(playerChoice, computerChoice){
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
 } else {
  score = -1;}

 return (score)
};



function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      totalScore.computerScore++
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      totalScore.computerScore--
      break;
  }

  let playerScore = document.getElementById('player-score')
  let computerScore = document.getElementById('computer-score')
  playerScore.innerText = `🫵 ${Number(totalScore.playerScore)}`
  computerScore.innerText = `🤖 ${Number(totalScore.computerScore)}`
  let rounds = document.getElementById('rounds-won')
  rounds.innerText = `Rounds won: ${playerWins}`
};


function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
};

function playGame() {
  var rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })
};

playGame()
