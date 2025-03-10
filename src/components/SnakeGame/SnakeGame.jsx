import { Typography, Container, Sheet } from "@mui/joy";
import { theme } from "../../template/theme";
import {Canvas} from "./canvas";

export default function SnakeGame () { 
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = theme.palette.primary.bright
        ctx.beginPath()
        ctx.arc(50, 100, 5*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
        }

    return (
        <Container sx={{
            display:'flex', 
            flexDirection:'column', 
            // justifyContent:'center',
            border: '5px dashed',
            borderColor: 'pink',
            height: '90%',
            }}>
            <Typography level="h1" variant="h1" sx={{color: theme.palette.primary.main, alignSelf:'center', '@media (max-width: 780px)' : {width:'20vw'}}}>
                Snake
          </Typography>
          <Typography level="h5">
                Use the arrow keys to guide your snake to food.
                Eat well. and outlive the other snake.
          </Typography>
          <Sheet sx={{backgroundColor:theme.palette.primary.dark}}>
            <Canvas draw={draw}/>
          </Sheet>
        </Container>
    )
}