import Snake from "./Snake"
import Point from "./Point";

export class SnakeNPC extends Snake {
    constructor(props){
        super(props)
        this.snake = SnakeNPC.defaultNPC();
        this.direction = "right";
    }

    static defaultNPC() {
            let defaultPoints = [
                { x: 60, y: 100,},
                { x: 50, y: 100,},
                { x: 40, y: 100,},
                { x: 30, y: 100,},
                { x: 20, y: 100,}
            ].map((p)=>new Point(p))
            return defaultPoints
        }

    move(){
        let newHead;
        console.log("oldDirection", this.direction)
        this.changeRandomDir(this.direction)
        console.log("newDirection", this.direction)
        if (this.direction == "right") {
            newHead = new Point({x: this.snake[0].x + 10, y: this.snake[0].y + 0})
        } else if (this.direction == "left") {
            newHead = new Point({x: this.snake[0].x - 10, y: this.snake[0].y +0})
        } else if (this.direction == "down") {
            newHead = new Point({x: this.snake[0].x + 0, y: this.snake[0].y +10})
        } else if (this.direction == "up") {
            newHead = new Point({x: this.snake[0].x + 0, y: this.snake[0].y -10})
        } else { 
            newHead = this.head()}
        // check if head will crash into wall before updating
        this.snake.unshift(newHead);
        this.snake.pop();
    }

  changeRandomDir(dir) {
    if (dir === "up" || dir === "down") Math.random() > .5 ? this.direction = "left" : this.direction = "right";
    if (dir === "left" || dir === "right") Math.random() > .5 ? this.direction = "down" : this.direction = "up";
  }

}