import { useCanvas } from "./hooks/useCanvas";

export const Canvas = (props) => { 
    const { drawcanvas, postdraw, snake } = props
    const canvasRef = useCanvas({ drawcanvas, postdraw, snake})
    return <canvas id="snakeBoard" ref={canvasRef} {...props}/>
}