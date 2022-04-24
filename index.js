// Initialization
let playerOneHealth = 100,
  playerTwoHealth = 100;
let roundCounter = 0;
let playerOneScore = 0,
  playerTwoScore = 0;
document.querySelector("#fire-btn").addEventListener("click", fireBtn, false);
document.querySelector("#reset-btn").addEventListener("click", resetBtn, false);

// Fire Function
function fireBtn() {
  let playerOneFire = Math.floor(Math.random() * 5);
  let playerTwoFire = Math.floor(Math.random() * 5);
  document.getElementById("playerOneFireScore").innerHTML = playerOneFire;
  document.getElementById("playerTwoFireScore").innerHTML = playerTwoFire;

  // Calculating Players Health after hitting by power
  playerOneHealth = playerOneHealth - playerTwoFire;
  playerTwoHealth = playerTwoHealth - playerOneFire;

  // Counting Number of Rounds Left
  roundCounter++;
  document.getElementById("round").innerHTML = `Round - ${roundCounter}`;

  // The Player whose health reaches 0, dies and the game ends.
  if (playerOneHealth == 0) {
    document.getElementById("result-item").innerHTML = "Player 2 Won!";
  }
  if (playerTwoHealth == 0) {
    document.getElementById("result-item").innerHTML = "Player 1 Won!";
  }

  // Restricting Shoot Button after 5 Rounds are Completed
  if (roundCounter == 5) {
    document.getElementById("fire-btn").disabled = true;
    document.getElementById("fire-btn").innerHTML = "Over";
  }

  // Finding the Winner of individual rounds and incrementing their score by 1
  if (playerOneFire > playerTwoFire) {
    playerOneScore = playerOneScore + 1;
  }

  if (playerTwoFire > playerOneFire) {
    playerTwoScore = playerTwoScore + 1;
  }

  document.getElementById("item-4").innerHTML = playerOneScore;
  document.getElementById("item-8").innerHTML = playerTwoScore;

  // Checking if anyone of the player has scored 3, if yes then terminating the game
  if (playerOneScore == 3) {
    gameOver("Player 1 Won!");
  }

  if (playerTwoScore == 3) {
    gameOver("Player 2 Won!");
  }

  // Checking which player has scored more after completing 5 rounds
  if (roundCounter == 5) {
    if (playerOneScore > playerTwoScore) {
      gameOver("Player 1 Won!");
    }

    if (playerTwoScore > playerOneScore) {
      gameOver("Player 2 Won!");
    }

    // Checking if both the players have scored equaly, if yes then printing DRAW
    if (playerTwoScore == playerOneScore) {
      gameOver("Match Draw");
    }
  }
}

// Game Over Function
function gameOver(playerComment) {
  document.getElementById("result-item").innerHTML = playerComment;
  document.getElementById("fire-btn").disabled = true;
  document.getElementById("fire-btn").innerHTML = "Over";
}

//Reset Button Function
function resetBtn() {
  location.reload();
}
