import { theme } from "../../template/theme";
import Point from "./Point";


/** Snake. Central actor in game: moves, eats pellets, and grows.
 *
 * @param snake - an array of Points in the snake
 * @param dx - direction snake moves horizontally
 * @param dy - direction snake moves vertically
 *
 **/
export default class Snake {
    constructor(snake) {
        this.snake = snake; // list of Points() in snake body
        this.dx = 10; // Horizontal velocity
        this.dy = 0; // Vertical velocity
      }
      
    head() {
    return this.snake[0];
    }

    draw(ctx){
        this.snake.forEach((p) =>{p.draw(ctx)})
    }

    move(setSnake){
        let newHead = new Point({x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy});
        this.snake.unshift(newHead);
        this.snake.pop();
        setSnake(this);
    }
}