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
                { x: 60, y: 200,},
                { x: 50, y: 200,},
                { x: 40, y: 200,},
                { x: 30, y: 200,},
                { x: 20, y: 200,}
            ].map((p)=>new Point(p))
            return defaultPoints
        }

    move(width, height){
        let newHead;
        newHead = this._calculateNewHead()
        while (newHead.isOutOfBound(width, height)){ 
            this.changeRandomDir()
            newHead = this._calculateNewHead()
        }
        this.snake.unshift(newHead);
        this.snake.pop();
    }

  changeRandomDir(dir = this.direction) {
    if (dir === "up" || dir === "down") Math.random() > .5 ? this.direction = "left" : this.direction = "right";
    if (dir === "left" || dir === "right") Math.random() > .5 ? this.direction = "down" : this.direction = "up";
  }

}