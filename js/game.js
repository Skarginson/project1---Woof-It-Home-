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
    const isRadiusTouching = distanceBetweenPlayerAndSheep(game.player, game.sheeps[0]) <= game.player.radius + game.sheeps[0].radius
    if (isRadiusTouching) {
      radiusTouching(game.player, game.sheeps[0]);
      getSheepEscapeDistance(game.player, game.sheeps[0]);
      getSheepEscapeAngle(game.player, game.sheeps[0]);
      console.log("specs", getSheepEscapeSpecs(game.player, game.sheeps[0]));
      // game.sheeps[0].top = getSheepEscapeSpecs(game.player, game.sheeps[0]).y
      // game.sheeps[0].left = getSheepEscapeSpecs(game.player, game.sheeps[0]).x
    }
    this.sheeps.forEach(sheep => {
      if (sheep.isOutOfGameScreen()) {
        this.endGame();
      }
    });
  }
  
  endGame() {
    clearInterval(this.gameIntervalId);
    this.gameIsOver = true;
    this.gameEndScreen.style.display = "block";
  }

  restart() {
    this.gameIsOver = false;
    this.sheeps = [];
    this.startScreen.style.display = "block";
    this.gameEndScreen.style.display = "none";
    this.start();
  }
  update() {
    this.player.move();
  }

  addSheep() {
    const sheepX = Math.floor(Math.random() * (this.width - this.dogWidth));
    const sheepY = Math.floor(Math.random() * (this.height - this.dogHeight));

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
