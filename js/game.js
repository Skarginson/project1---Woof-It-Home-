class Game {
  constructor(gameScreen) {
    this.dogWidth = 80;
    this.dogHeight = 80;
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = gameScreen;
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 700;
    this.width = 700;
    this.sheeps = [];
    this.player = new Player(
      this.gameScreen,
      this.width / 2 - this.dogWidth / 2,
      this.height / 2 - this.dogHeight / 2,
      this.dogWidth,
      this.dogHeight,
      this.width,
      this.height
    );
    this.pen = document.querySelector("#sheep-pen")
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.visibility = "visible";
    this.addSheep();

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();
    const pen = document.getElementById("sheep-pen");

    this.sheeps.forEach((sheep) => {
      if (sheep.isInPen(pen)) {
        this.winGame();
      }
      sheep.escapeFromPlayer(this.player);
      if (sheep.isOutOfGameScreen()) {
        this.endGame();
      }
    });
    console.log(this.sheeps)
  }

  winGame() {
    alert("Victoire ! Le mouton est en sécurité dans son enclos ! Bon chien !");
    this.endGame();
  }
  endGame() {
    clearInterval(this.gameIntervalId);
    this.gameIsOver = true;
    this.gameEndScreen.style.display = "block";
    this.gameScreen.style.visibility = "hidden";
    this.gameScreen.innerHTML = "";
    this.sheeps[0].remove();
  }


  restart() {
    clearInterval(this.gameIntervalId); 
    this.gameIsOver = false;
    this.sheeps = [];
    this.gameScreen.innerHTML = ''; 
    this.gameScreen.appendChild(this.pen);

    this.player = new Player(
      this.gameScreen,
      this.width / 2 - this.dogWidth / 2,
      this.height / 2 - this.dogHeight / 2,
      this.dogWidth,
      this.dogHeight,
      this.width,
      this.height
    );
    this.gameScreen.appendChild(this.player.element);

    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.visibility = "visible";

    this.start();
  }
  update() {
    this.player.move();
  }

  addSheep() {
    const spawnX = this.width - (this.dogWidth * 4);
    const spawnY = this.height - this.dogHeight * 4;
    const sheepX = Math.floor(Math.random() * (spawnX)) + (this.dogWidth*2);
    const sheepY = Math.floor(Math.random() * spawnY) + this.dogHeight*2;

    this.sheeps.push(
      new Sheep(
        this.gameScreen,
        sheepX,
        sheepY,
        this.dogWidth,
        this.dogHeight,
        this.width,
        this.height
      )
    );
  }
}
