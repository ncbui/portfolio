import { useRef, useEffect } from "react";
import { theme } from "../../template/theme";
import { useCanvas } from "./hooks/useCanvas";



export const Canvas = (props) => { 

    const { draw, predraw, postdraw } = props
    const canvasRef = useCanvas(draw, {predraw, postdraw})

    return <canvas ref={canvasRef} {...props}/>
}