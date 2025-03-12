import { theme } from "../../template/theme";

export default class Snake {
    constructor(snake, color = "orange") {
        this.snake = snake; // list of Points in snake body
        this.color = color;
        this.dx = 10; // Horizontal velocity
        this.dy = 0; // Vertical velocity
      }
      //   Find the head of the snake to move it
    head() {
    return this.snake[0];
    }

    draw(ctx){
        this.snake.forEach((snakePart) =>{
            ctx.fillStyle = theme.palette.primary.bright;
            // Set the border colour of the snake part
            ctx.strokestyle = theme.palette.primary.main;
            // Draw a "filled" rectangle to represent the snake part at the coordinates
            // the part is located
            ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            // Draw a border around the snake part
            ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
            })
    }

    move(setSnake){
        console.log("before mpve", this.snake)
        let newHead = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
        this.snake.unshift(newHead);
        this.snake.pop();
        console.log("after mpve", this.snake)
        setSnake(this);
    }
}