const gameScreen = document.querySelector("#game-screen")
const game = new Game(gameScreen);

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", function () {
  game.start();
  console.log(game.sheeps[0].center, game.player.center)
});


function getElementCenter(element){
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + gameScreen.getBoundingClientRect().x + rect.width / 2;
  const centerY = rect.top + gameScreen.getBoundingClientRect().y + rect.height / 2;
  return { centerX, centerY };
}

function distanceBetweenPlayerAndSheep(player, sheep) {
  const AB = player.element.getBoundingClientRect().x - 
}

