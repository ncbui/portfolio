import { extend } from "lodash";
import Point from "./Point";


/** Snake. Central actor in game: moves, eats pellets, and grows.
 *
 * @param snake - an array of Points in the snake
 * @param dx - direction snake moves horizontally
 * @param dy - direction snake moves vertically
 *
 **/
export default class Snake {
    constructor() {
        this.snake = Snake.defaultSnake(); // list of Points() in snake body
        this.dx = 10; // Horizontal velocity, keep at least 10
        this.dy = 0; // Vertical velocity
      }

      static defaultSnake() {
        let defaultPoints = [
            { x: 60, y: 100,},
            { x: 50, y: 100,},
            { x: 40, y: 100,},
            { x: 30, y: 100,},
            { x: 20, y: 100,}
        ].map((p)=>new Point(p))
        return defaultPoints
    }
      
    head() {
    return this.snake[0];
    }

    draw(ctx){
        this.snake.forEach((p) =>{
            p.draw(ctx)})
    }

    move(){
        let newHead = new Point({x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy});
        this.snake.unshift(newHead);
        this.snake.pop();
    }

    outOfBounds(width, height){
        return this.head().isOutOfBound(width, height)
    }
}