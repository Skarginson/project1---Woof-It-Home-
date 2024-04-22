class Sheep {
    constructor(gameScreen, left, top, width, height, gameWidth, gameHeight) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.radius = 150;
      this.element = document.createElement("div");
      this.element.className = "sheep";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.borderRadius = "50%";
      this.element.style.backgroundColor = "grey";
      this.center = getElementCenter(this.element);
      this.gameScreen.appendChild(this.element);
    }
  
    // Random movements to add in 0.2 
 /*    move() {
      this.element.style.top = `${++this.top}px`;
    } */
  }
  