import { useRef, useEffect } from 'react'
import { theme } from '../../template/theme';


const defaultCanvas = () =>{
    const WIDTH = 48;
    const HEIGHT = 60;
    const SCALE = 12;
    const default_canvas = document.getElementById("board");
    default_canvas.setAttribute("height", `${HEIGHT * SCALE}rem`);
    default_canvas.style.marginTop = `${(HEIGHT * SCALE) / -2}px`;
    default_canvas.setAttribute("width", `${WIDTH * SCALE}rem`);
    default_canvas.style.marginLeft = `${(WIDTH * SCALE) / -2}px`;
    default_canvas.style.backgroundColor = theme.palette.primary.dark;
}


export const useCanvas = (draw) => {

    const canvasRef = useRef(defaultCanvas);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0;
        let frameId;    

        const render = () => {
            frameCount++
            draw(context, frameCount)
            frameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
            window.cancelAnimationFrame(frameId)
        }
      }, [draw])
      return canvasRef
}
