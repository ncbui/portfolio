import { theme } from "../../template/theme";


/** Snake. Central actor in game: moves, eats pellets, and grows.
 *
 * @param snake - an array of points in the snake
 * @param dx - direction snake moves horizontally
 * @param dy - direction snake moves vertically
 *
 **/
export default class Snake {
    constructor(snake) {
        this.snake = snake; // list of Points in snake body
        this.dx = 10; // Horizontal velocity
        this.dy = 0; // Vertical velocity
      }
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
        let newHead = {x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy};
        this.snake.unshift(newHead);
        this.snake.pop();
        setSnake(this);
    }
}