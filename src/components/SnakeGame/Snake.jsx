export default class Snake {
    constructor(snake, color = "orange") {
        this.parts = snake; // list of Points in snake body
        this.color = color;
        this.dx = 10; // Horizontal velocity
        this.dy = 0; // Vertical velocity
      }

}