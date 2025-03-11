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
