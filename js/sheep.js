class Sheep {
    constructor(gameScreen, left, top, width, height, gameWidth, gameHeight) {
      this.gameScreen = gameScreen;
      this.left = left;
      // this.left = 1389.6994431940877;
      this.top = top;
      //this.top = 260.28224832477275;
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
    }
  

    center() {
        return getElementCenter(this.element)
     }
     
    isOutOfGameScreen() {
      const outLeft = this.left < 0;
      const outRight = this.left + this.width > this.gameWidth;
      const outTop = this.top < 0;
      const outBottom = this.top + this.height > this.gameHeight;

      return outLeft || outRight || outTop || outBottom;
    }
    // Random movements to add in 0.2 
 /*    move() {
      this.element.style.top = `${++this.top}px`;
    } */
  }
  