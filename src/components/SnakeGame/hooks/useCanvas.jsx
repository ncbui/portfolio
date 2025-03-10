import { useRef, useEffect } from 'react'
import { theme } from '../../../template/theme';


const defaultCanvas = () =>{
    const WIDTH = 50;
    const HEIGHT = 60;
    const { devicePixelRatio:ratio=1 } = window
    const default_canvas = document.getElementById("board");
    default_canvas.setAttribute("height", `${HEIGHT * ratio}px`);
    default_canvas.style.marginTop = `${(HEIGHT * ratio) / -2}px`;
    default_canvas.setAttribute("width", `${WIDTH * ratio}px`);
    default_canvas.style.marginLeft = `${(WIDTH * ratio) / -2}px`;
    default_canvas.style.backgroundColor = theme.palette.primary.dark;
}

export const useCanvas = (draw, options={}) => {
    // const {predraw, postdraw} = options
    const canvasRef = useRef(defaultCanvas);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || '2d');
        console.log(canvas.getContext('2d'))
        let frameCount = 0;
        let frameId;    
        const render = () => {
            frameCount++
            // predraw (context, canvas)
            draw(context, frameCount)
            // postdraw()
            frameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(frameId)
        }
      }, [draw])
      return canvasRef
}
