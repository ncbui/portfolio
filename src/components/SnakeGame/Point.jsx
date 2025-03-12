import { theme } from "../../template/theme";

/** Point: a single element on the game board.
 *
 * This is used to draw a circle on the game board at x,y. It is used by both
 * the food Pellet class (which has one point), and by the Snake class (which
 * has a point for each link in the snake).
 *
 * x - x coord (0 is left)
 * y - y coord (0 is top)
 *
 * */
export default class Point {
    constructor(p) {
      this.x = p.x;
      this.y = p.y;
    }

    draw(ctx){
        ctx.fillStyle = theme.palette.primary.bright;
        // Set the border colour of the snake part
        ctx.strokestyle = theme.palette.primary.main;
        // Draw a "filled" rectangle to represent the snake part at the coordinates
        // the part is located
        ctx.fillRect(this.x, this.y, 10, 10);
        // Draw a border around the snake part
        ctx.strokeRect(this.x, this.y, 10, 10);
    }
}