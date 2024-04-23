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

function distanceBetweenPlayerAndSheep(player, sheep) {
  const AB =
    (player.center().centerX -
    sheep.center().centerX) **2 +
    (player.center().centerY - sheep.center().centerY) **2;
  // AB can be negative so we use Math.ABS so C doesn't return NaN
  const C = Math.sqrt(AB);
  return C;
}

function radiusTouching(player, sheep) {
    console.log("radius touching");
  // woof.mp3
  // beeeh.mp3
  }



// WIP. Method for Sheep ? 
function getSheepEscapeDistance(player, sheep) {
    return (player.radius + sheep.radius) - distanceBetweenPlayerAndSheep(player, sheep);
  }

function getSheepEscapeAngle(player, sheep) {
  const firstAngleRad = Math.atan((player.center().centerX - sheep.center().centerX) / (player.center().centerY - sheep.center().centerY));
  console.log("Rad", firstAngleRad)
  const firstAngleDeg = (firstAngleRad * 180) / Math.PI;
  console.log(firstAngleDeg)
  return firstAngleDeg
}