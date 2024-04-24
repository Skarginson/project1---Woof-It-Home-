const gameScreen = document.querySelector("#game-screen");
const game = new Game(gameScreen);
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", function () {
  game.start();
});

restartButton.addEventListener("click", function () {
  game.restart();
});

function getElementCenter(element) {
  const rect = element.getBoundingClientRect();
  const centerX =
    rect.left + gameScreen.getBoundingClientRect().x + rect.width / 2;
  const centerY =
    rect.top + gameScreen.getBoundingClientRect().y + rect.height / 2;
  return { centerX, centerY };
}

function distanceBetweenPlayerAndSheep(player, sheep) {
  const AB =
    (player.center().centerX -
    sheep.center().centerX) **2 +
    (player.center().centerY - sheep.center().centerY) **2;
  const C = Math.sqrt(AB);
  return C;
}

function radiusTouching(player, sheep) {
    console.log("radius touching");
  // woof.mp3
  // beeeh.mp3
  }
