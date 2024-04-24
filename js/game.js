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
  }

  winGame() {
    clearInterval(this.gameIntervalId);
    this.gameIsOver = true;
    alert("Victoire ! Le mouton est en sécurité dans son enclos ! Bon chien !");
    this.gameEndScreen.style.display = "block";
    this.gameScreen.style.visibility = "hidden";
    this.gameScreen.innerHTML = "";
  }
  endGame() {
    clearInterval(this.gameIntervalId);
    this.gameIsOver = true;
    this.gameEndScreen.style.display = "block";
    this.gameScreen.style.visibility = "hidden";
    this.gameScreen.innerHTML = "";
  }

  restart() {
    clearInterval(this.gameIntervalId); // Arrêter le jeu actuel
    this.gameIsOver = false;
    this.sheeps = []; // Réinitialiser la liste des moutons

    this.gameScreen.innerHTML = ''; // Nettoyer le contenu du gameScreen
    this.gameScreen.appendChild(this.pen); // Ajouter à nouveau l'enclos

    // Recréer le joueur
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

    this.addSheep(); // Ajoutez un nouveau mouton si nécessaire

    // Réinitialiser les styles et la visibilité
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.visibility = "visible";

    // Démarrer le jeu à nouveau
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
