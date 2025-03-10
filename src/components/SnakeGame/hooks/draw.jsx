import { theme } from "../../../template/theme"

export const drawCanvas = (ctx, canvas) => {
    ctx.save()
    resizeCanvasToDisplaySize(ctx, canvas)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

export const postdraw = () => {
    index++
    ctx.restore()
}

export function drawSnake(ctx, frameCount, snake) {
    snake.forEach((snakePart) =>{
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
    
function resizeCanvasToDisplaySize(ctx, canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio:ratio=1 } = window
        const ctx = canvas.getctx('2d')
        canvas.width = width*ratio
        canvas.height = height*ratio
        ctx.scale(ratio, ratio)
        return true
        }

    return false
}
