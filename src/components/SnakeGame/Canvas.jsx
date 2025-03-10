import { useCanvas } from "./hooks/useCanvas";

export const Canvas = (options, snake) => { 
    const canvasRef = useCanvas(options, snake)
    return <canvas id="snakeBoard" ref={canvasRef} {...options}/>
}