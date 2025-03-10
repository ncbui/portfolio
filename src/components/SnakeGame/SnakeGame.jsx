import { Sheet, Typography } from "@mui/joy";
import { theme, BootstrapButton } from "../../template/theme";
import {Canvas} from "./canvas";
import { drawSnake, drawCanvas, postdraw } from "./hooks/draw";

export default function SnakeGame (props) { 
    let snake = [
        { x: 20, y: 100,},
        { x: 30, y: 100,},
        { x: 40, y: 100,},
        { x: 50, y: 100,},
        { x: 60, y: 100,},
    ]; 

    let options = {
      drawsnake: drawSnake,
      drawcanvas: drawCanvas,
      postdraw: postdraw,
    }

    return (
      <>
      <Typography variant="title" color="inherit" noWrap>
      &nbsp;
      </Typography>
      <BootstrapButton id="startButton">Start</BootstrapButton>
      <Typography variant="title" color="inherit" noWrap>
      &nbsp;
      </Typography>
      <Sheet sx={{backgroundColor:theme.palette.primary.dark, width:'50%', height: '60%'}}>
        <Canvas options={options} snake={snake}/>
      </Sheet>
      </>
    )
}