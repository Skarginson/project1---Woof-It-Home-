const gameScreen = document.querySelector("#game-screen");
const game = new Game(gameScreen);
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", function () {
  game.start();
});

function getElementCenter(element) {
  const rect = element.getBoundingClientRect();
  const centerX =
    rect.left + gameScreen.getBoundingClientRect().x + rect.width / 2;
  const centerY =
    rect.top + gameScreen.getBoundingClientRect().y + rect.height / 2;
  return { centerX, centerY };
}

// Make it a const ? But will it be usable for multiple sheeps?
function distanceBetweenPlayerAndSheep(player, sheep) {
  const AB =
    player.center().centerX -
    sheep.center().centerX +
    (player.center().centerY - sheep.center().centerY);
  // AB can be negative so we use Math.ABS so C doesn't return NaN
  const C = Math.sqrt(Math.abs(AB));
  return C;
}

// WIP
function radiusTouching(callback, player, sheep) {
  if (callback(player, sheep) >= player.radius + sheep[0].radius) {
    console.log("radius touching");
  }
}

// WIP
function getSheepEscapeDistance() {
  return player.radius + sheep[0].radius - distanceBetweenPlayerAndSheep;
}
// WIP
function getSheepEscapeAngle() {
  const firstAngleRad = Math.atan((player.center().centerX - sheep.center().centerX) / (player.center().centerY - sheep.center().centerY));
  const firstAngleDeg = firstAngleRad * 180 % Math.PI;

  
}