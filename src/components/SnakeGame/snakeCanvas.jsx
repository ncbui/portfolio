import {  theme, BootstrapButton } from "../../template/theme";
import { Container, Sheet } from "@mui/joy";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Snake from "./Snake";
import Point from "./Point";


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


export const postdraw = (ctx) => {
    // index++
    ctx.restore()
}
    
function resizeCanvasToDisplaySize(ctx, canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio:ratio=1 } = window
        const ctx = canvas.getctx('2d')
        canvas.width = width*ratio
        canvas.height = height*ratio
        ctx.scale(ratio, ratio)
        return true
        }

    return false
}

const drawCanvas = (ctx, canvas) => {
    const { width, height } = canvas
    ctx.save()
    // resizeCanvasToDisplaySize(ctx, canvas)
    ctx.clearRect(0, 0, width, height)
}

let longSnake = [
    { x: 60, y: 100,},
    { x: 50, y: 100,},
    { x: 40, y: 100,},
    { x: 30, y: 100,},
    { x: 20, y: 100,},
  ]

let pointSnake = longSnake.map((p)=>new Point(p))

let newSnake = new Snake(pointSnake)

export const SnakeCanvas = (props) => { 
    // get canvas
    const canvasRef = useRef()
    const [shouldStart, setShouldStart] = useState(false)
    const [frameCounter, setFrameCounter] = useState(0)
    const [snake, setSnake] = useState(newSnake)
    console.log("longSnake", longSnake)
    console.log("pointSnake", pointSnake)
    console.log("newSnake", newSnake)
    
    // output graphics, re-renders when update changes
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        drawCanvas(context, canvas)
        // move snake
        // check collision
        snake.draw(context)
        snake.move(setSnake)
        postdraw(context)
    }, [frameCounter])

    // update the counter
    useLayoutEffect(() => {
        if (shouldStart) {
            let timerId
            const animate = () => {
                setFrameCounter(c => c + 1)
                timerId = requestAnimationFrame(animate)
            }
            timerId = requestAnimationFrame(animate)
            setSnake(newSnake)
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