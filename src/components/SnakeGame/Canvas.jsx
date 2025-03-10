import { useRef, useEffect } from "react";
import { theme } from "../../template/theme";



const defaultCanvas = () =>{
    const WIDTH = 30;
    const HEIGHT = 24;
    const SCALE = 24;
    const default_canvas = document.getElementById("board");
    default_canvas.setAttribute("height", `${HEIGHT * SCALE}`);
    default_canvas.style.marginTop = `${(HEIGHT * SCALE) / -2}px`;
    default_canvas.setAttribute("width", `${WIDTH * SCALE}`);
    default_canvas.style.marginLeft = `${(WIDTH * SCALE) / -2}px`;
}

export default function Canvas (props){ 
    const canvasRef = useRef(defaultCanvas)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = theme.palette.primary.dark1
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
      }, [])

    return <canvas ref={canvasRef} {...props}/>
}