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
  // AB can be negative so we use Math.ABS so C doesn't return NaN
  const C = Math.sqrt(AB);
  return C;
}

function radiusTouching(player, sheep) {
    console.log("radius touching");
  // woof.mp3
  // beeeh.mp3
  }

  // useless ?
function getSheepEscapeDistance(player, sheep) {
    return (player.radius + sheep.radius) - distanceBetweenPlayerAndSheep(player, sheep);
  }

function getSheepEscapeAngle(player, sheep) {
  const firstAngleRad = Math.atan(Math.abs(player.center().centerX - sheep.center().centerX) / Math.abs(player.center().centerY - sheep.center().centerY));
  const dirX = player.left < sheep.left ? -1 : 1;
  const dirY = player.top < sheep.top ? -1 : 1;
  let firstAngleDeg = (firstAngleRad * 180) / Math.PI;
  //console.log("anglebefore = ", firstAngleDeg)
  if (dirX < 0 && dirY > 0) {
    firstAngleDeg += 90;
  } else if (dirX < 0 && dirY < 0) {
    firstAngleDeg += 180;
  } else if (dirX > 0 && dirY < 0) {
    firstAngleDeg += 270;
  }
  return firstAngleDeg
}

function getSheepEscapeSpecs(player, sheep) {
  const angle = getSheepEscapeAngle(player, sheep);
  //console.log("angle =", angle);
  const x = Math.sin(angle % 90) * (player.radius + sheep.radius)
  const y = Math.sqrt(Math.abs(((player.radius + sheep.radius)**2) - x**2));
  //console.log("y", y,"x", x)
  const playerCenter = player.center();
  //console.log("player center", playerCenter)
  
  const dirX = player.left > sheep.left ? -1 : 1;
  const dirY = player.top > sheep.top ? -1 : 1;
  //console.log(player.left, sheep.left)
  //console.log({dirX, dirY})
  console.log({playerCenter, angle, x, y, dirX, dirY})
  return {x: (x * dirX) + playerCenter.centerX, y: (y * dirY) + playerCenter.centerY}
}
// then what ?

// return an Object with position and angle. Why if getSheepEscapeAngle do just the same ?