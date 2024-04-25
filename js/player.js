class Player {
  constructor(
    gameScreen,
    left,
    top,
    width,
    height,
    gameWidth,
    gameHeight,
    game
  ) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.radius = 100;
    this.element = document.createElement("div");
    this.element.className = "player";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.borderRadius = "50%";
    this.element.style.backgroundColor = "black";
    this.gameScreen.appendChild(this.element);
    this.game = game;
  }

  move(e) {
    const nextLeft =
      e.clientX - this.gameScreen.getBoundingClientRect().x - this.width / 2;
    const nextTop =
      e.clientY - this.gameScreen.getBoundingClientRect().y - this.height / 2;

    this.left = nextLeft;
    this.top = nextTop;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    // console.log(!this.game.checkCollisionWithPen(nextLeft, nextTop, this));
    // // Vérification de collision avant de mettre à jour la position
    // if (!this.game.checkCollisionWithPen(nextLeft, nextTop, this)) {
    //   this.left = nextLeft;
    //   this.top = nextTop;
    //   this.element.style.left = `${this.left}px`;
    //   this.element.style.top = `${this.top}px`;
    //   console.log("move");
  }

  center() {
    return {
      centerX: this.left + this.width / 2,
      centerY: this.top + this.height / 2,
    };
  }
}
