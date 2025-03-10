import { useRef, useEffect } from 'react'
import { theme } from '../../../template/theme';
import {drawSnake, drawCanvas} from './draw.jsx'

const defaultCanvas = () =>{
    const WIDTH = 20;
    const HEIGHT = 30;
    const { devicePixelRatio:ratio=1 } = window
    const default_canvas = document.getElementById("board");
    default_canvas.setAttribute("height", `${HEIGHT * ratio}px`);
    default_canvas.style.marginTop = `${(HEIGHT * ratio) / -2}px`;
    default_canvas.setAttribute("width", `${WIDTH * ratio}px`);
    default_canvas.style.marginLeft = `${(WIDTH * ratio) / -2}px`;
    default_canvas.style.backgroundColor = theme.palette.primary.dark;
}

export function useCanvas(options, snake) {
    // const {drawCanvas, postdraw} = options
    const {drawsnake, drawcanvas, postdraw} = options;

    const canvasRef = useRef(defaultCanvas);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let frameCount = 0;
        let frameId;    
        const render = () => {
            frameCount++
            drawCanvas (context, canvas)
            drawSnake(context, frameCount, snake)
            // postdraw()
            frameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(frameId)
        }
      }, [drawsnake])
      return canvasRef
}
