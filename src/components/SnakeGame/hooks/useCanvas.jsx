import { useRef, useEffect, useState } from 'react'
import { theme } from '../../../template/theme';

const defaultCanvas = () =>{
    const WIDTH = 20;
    const HEIGHT = 30;
    const { devicePixelRatio:ratio=1 } = window
    const default_canvas = document.getElementById("snakeBoard");
    default_canvas.setAttribute("height", `${HEIGHT * ratio}px`);
    default_canvas.style.marginTop = `${(HEIGHT * ratio) / -2}px`;
    default_canvas.setAttribute("width", `${WIDTH * ratio}px`);
    default_canvas.style.marginLeft = `${(WIDTH * ratio) / -2}px`;
    default_canvas.style.backgroundColor = theme.palette.primary.dark;
}

// TODO: update to ref hook to update the canvas without re-rendering SnakeGame
export function useCanvas(props) {
    const { drawCanvas, postdraw, snake} = props;
    const canvasRef = useRef(defaultCanvas);
    const [snakeState, setSnakeState] = useState(snake);

    useEffect(() => {
        console.log("useEffect called in useCanvas")
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let frameId;    
        const render = () => {
            frameCount++
            drawCanvas (context, canvas)
            snakeState.draw(context, setSnakeState)
            setSnakeState(snakeState)
            // postdraw()
            frameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
            window.cancelAnimationFrame(frameId)
        }
      }, [snakeState])

      return canvasRef
}
