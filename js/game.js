class Game {
  // code to be added
  constructor() {
    this.dogWidth = 80;
    this.dogHeight = 80;
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 700;
    this.width = 700;
    this.sheeps = [];
    this.player = new Player(
      this.gameScreen,
      this.width / 2 - this.dogWidth / 2,
      this.height - this.dogHeight,
      this.dogWidth,
      this.dogHeight,
      this.width,
      this.height
    );
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
    this.renderCounter = 0;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.addSheep();

    // setInterval(() => {
    //   this.addSheep();
    // }, 4000);

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    /* if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    } */

    this.renderCounter = ++this.renderCounter % 360;

    this.update();
  }

  update() {
    this.player.move();

/*     this.addSheep();
    if (this.renderCounter === 0) {
  } */
  /*  
    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        this.player.isInvincible = true;
        this.player.element.classList.add("invincible");

        this.livesDisplay.textContent = --this.lives;

        if (this.lives <= 0) {
          this.gameIsOver = true;
        }

        setTimeout(() => {
          this.player.isInvincible = false;
          this.player.element.classList.remove("invincible");
        }, 3000);
      }
    });

    if (this.obstacles[0].top > this.height) {
      this.obstacles[0].element.remove();
      this.obstacles.shift();
    } */
  }

  addSheep() {
    const obstacleX =  400; /* Math.floor(Math.random() * (this.width - this.dogWidth)); */
    const obstacleY = 400;

    this.sheeps.push(
      new Sheep(
        this.gameScreen,
        obstacleX,
        obstacleY,
        this.dogWidth,
        this.dogHeight,
        this.width,
        this.height
      )
    );
  }
}
