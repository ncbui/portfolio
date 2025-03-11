import { useCanvas } from "./hooks/useCanvas";


export const drawCanvas = (ctx, canvas) => {
    ctx.save()
    resizeCanvasToDisplaySize(ctx, canvas)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

export const postdraw = () => {
    index++
    ctx.restore()
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


export const Canvas = (props) => { 
    const { snake } = props
    const canvasRef = useCanvas({ drawCanvas, postdraw, snake})
    return <canvas id="snakeBoard" ref={canvasRef} {...props}/>
}