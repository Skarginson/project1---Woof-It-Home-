class Sheep {
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
    this.radius = 35;
    this.element = document.createElement("div");
    this.element.className = "sheep";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.borderRadius = "50%";
    this.element.style.backgroundColor = "grey";
    this.gameScreen.appendChild(this.element);
    this.game = game;
  }

  isOutOfGameScreen() {
    const outLeft = this.left < 0;
    const outRight = this.left + this.width > this.gameWidth;
    const outTop = this.top < 0;
    const outBottom = this.top + this.height > this.gameHeight;

    return outLeft || outRight || outTop || outBottom;
  }

  escapeFromPlayer(player) {
    const dx = player.center().centerX - this.center().centerX;
    const dy = player.center().centerY - this.center().centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const escapeDistance = 20;
    const isRadiusTouching =
      distanceBetweenPlayerAndSheep(game.player, game.sheeps[0]) <=
      game.player.radius + game.sheeps[0].radius;

    if (isRadiusTouching) {
      const nextLeft = this.left - escapeDistance * (dx / distance);
      const nextTop = this.top - escapeDistance * (dy / distance);
      this.left = nextLeft;
      this.top = nextTop;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;

      // if (!this.game.checkCollisionWithPen(nextLeft, nextTop, this)) {
      //   this.left = nextLeft;
      //   this.top = nextTop;
      //   this.element.style.left = `${this.left}px`;
      //   this.element.style.top = `${this.top}px`;
      // }
    }
  }

  center() {
    return {
      centerX: this.left + this.width / 2,
      centerY: this.top + this.height / 2,
    };
  }

  isInPen(pen) {
    const penRect = pen.getBoundingClientRect();
    const sheepRect = this.element.getBoundingClientRect();

    return (
      sheepRect.left >= penRect.left &&
      sheepRect.right <= penRect.right &&
      sheepRect.top >= penRect.top &&
      sheepRect.bottom <= penRect.bottom
    );
  }
}
