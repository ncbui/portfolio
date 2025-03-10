import { useRef, useEffect } from "react";
import { theme } from "../../template/theme";
import { useCanvas } from "./CanvasHook";



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

export const Canvas = (props) => { 

    const { draw, ...rest } = props
    const canvasRef = useCanvas(draw)

    return <canvas ref={canvasRef} {...props}/>
}