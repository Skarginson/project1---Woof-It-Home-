class Player {
  constructor(gameScreen, left, top, width, height, gameWidth, gameHeight) {
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
  }

  move() {
    this.gameScreen.addEventListener("mousemove", (e) => {
      this.left =
        e.clientX - this.gameScreen.getBoundingClientRect().x - this.width / 2;
      this.top =
        e.clientY - this.gameScreen.getBoundingClientRect().y - this.height / 2;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
    });
  }

  center() {
    return {
      centerX: this.left + this.width / 2,
      centerY: this.top + this.height / 2
  };
  }

  updatePosition() {}
}
