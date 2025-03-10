import { useCanvas } from "./hooks/useCanvas";

export const Canvas = (props) => { 
    const { drawsnake, drawcanvas, postdraw, snake } = props
    const canvasRef = useCanvas({ drawsnake, drawcanvas, postdraw, snake})
    return <canvas id="snakeBoard" ref={canvasRef} {...props}/>
}