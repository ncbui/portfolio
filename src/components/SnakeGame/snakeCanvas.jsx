import {  theme, BootstrapButton } from "../../template/theme";
import { Container, Sheet } from "@mui/joy";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Snake from "./Snake";
import {SnakeNPC} from "./SnakeNPC";

// const defaultCanvas = () =>{
//     const WIDTH = 20;
//     const HEIGHT = 30;
//     const { devicePixelRatio:ratio=1 } = window
//     const default_canvas = document.getElementById("snakeBoard");
//     default_canvas.setAttribute("height", `${HEIGHT * ratio}px`);
//     default_canvas.style.marginTop = `${(HEIGHT * ratio) / -2}px`;
//     default_canvas.setAttribute("width", `${WIDTH * ratio}px`);
//     default_canvas.style.marginLeft = `${(WIDTH * ratio) / -2}px`;
//     default_canvas.style.backgroundColor = theme.palette.primary.dark;
// }

    
function resizeCanvasToDisplaySize(ctx, canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio:ratio=1 } = window
        canvas.width = width*ratio
        canvas.height = height*ratio
        ctx.scale(ratio, ratio)
        return true
        }

    return false
}

const drawCanvas = ( canvas) => {
    const { width, height } = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.save()
    // if (canvas.width !== width || canvas.height !== height) {
    //     const { devicePixelRatio:ratio=1 } = window
    //     canvas.width = width*ratio
    //     canvas.height = height*ratio
    //     ctx.scale(ratio, ratio)
    //     }
    ctx.clearRect(0, 0, width, height)
}


export const SnakeCanvas = () => { 
    const canvasRef = useRef()     // get canvas
    const [shouldStart, setShouldStart] = useState(false)
    const [frameCounter, setFrameCounter] = useState(0)
    const [snake, setSnake] = useState(new SnakeNPC())
    // output graphics, re-renders when update changes
    useEffect(() => {
        if (shouldStart){
            const canvas = canvasRef.current
            const {width,height} = canvas
            const context = canvas.getContext('2d')
            drawCanvas(canvas)
            snake.move(width,height)
            if (snake.outOfBounds(width,height)){
                console.log("game over")
                snake.draw(context)
                setSnake(new SnakeNPC())
                setShouldStart(false)
                return () => {}}
            snake.draw(context)
            context.restore()
        }
        return () => {
        }
    }, [frameCounter, snake, shouldStart])

    // update the counter
    useLayoutEffect(() => {
        if (shouldStart) {
            let timerId
            const animate = () => {
                setFrameCounter(c => c + 1)
                timerId = requestAnimationFrame(animate)
            }
            timerId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(timerId)
        }
    }, [shouldStart])
    
    return (
        <Container sx={{marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'25rem', height: '25rem'}}>
        <BootstrapButton id="startButton" onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}}> 
            { shouldStart? 'Stop' : 'Start'}
        </BootstrapButton>
        <Sheet sx={{backgroundColor:theme.palette.primary.dark, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
        <canvas id="snakeboard" ref={canvasRef} width='350px' height='300px' style={{border: '5px solid pink'}}/>
        </Sheet>
        </Container>
    )
}