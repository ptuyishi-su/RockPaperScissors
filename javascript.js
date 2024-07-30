const Rock = document.querySelector("#rock-btn");
const Paper = document.querySelector("#paper-btn");
const Scissors = document.querySelector("#scissors-btn");
const winnerText = document.getElementById("winner");
const humanScoreDisplay = document.getElementById('humanScoreDisplay');
const botScoreDisplay = document.getElementById('botScoreDisplay');
const Restart = document.getElementById("restartBtn");

let humanScore = 0;
let botScore = 0;

function botPlayer() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function humanPlayer(choice) {
  let botChoice = botPlayer();
  determineWinner(choice, botChoice);
}

function determineWinner(human, bot) {
  if (human === bot) {
    winnerText.innerText = "It's a tie!";
  } else if (
    (human === "rock" && bot === "scissors") ||
    (human === "paper" && bot === "rock") ||
    (human === "scissors" && bot === "paper")
  ) {
    winnerText.innerText = `You win! ${human} beats ${bot}`;
    humanScore++;
    humanScoreDisplay.innerText = `Human: ${humanScore}`;
  } else {
    winnerText.innerText = `You lose! ${bot} beats ${human}`;
    botScore++;
    botScoreDisplay.innerText = `Bot: ${botScore}`;
  }
  endGame(humanScore, botScore);
}

function endGame(humanScore, botScore) {
  if (humanScore === 10 || botScore === 10) {
    let winner = humanScore === 10 ? "Human" : "Bot";
    winnerText.innerText = `${winner} wins the game!`;
    Rock.disabled = true;
    Paper.disabled = true;
    Scissors.disabled = true;
  }
}

Restart.addEventListener("click", function() {
  Rock.disabled = false;
  Paper.disabled = false;
  Scissors.disabled = false;
  humanScore = 0;
  botScore = 0;
  humanScoreDisplay.innerText = `Human: ${humanScore}`;
  botScoreDisplay.innerText = `Bot: ${botScore}`;
  winnerText.innerText = "";
});

Rock.addEventListener("click", function() {
  humanPlayer("rock");
});

Paper.addEventListener("click", function() {
  humanPlayer("paper");
});

Scissors.addEventListener("click", function() {
  humanPlayer("scissors");
});
