import { theme } from "../../../template/theme"

export const predraw = (context, canvas) => {
    context.save()
    resizeCanvasToDisplaySize(context, canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
  }
export const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = theme.palette.primary.bright
    ctx.beginPath()
    ctx.arc(50, 100, 5*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
    }
export const postdraw = () => {
    index++
    ctx.restore()
}

function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio:ratio=1 } = window
        const context = canvas.getContext('2d')
        canvas.width = width*ratio
        canvas.height = height*ratio
        context.scale(ratio, ratio)
        return true
        }

    return false
}
