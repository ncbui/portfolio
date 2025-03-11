import { Sheet, Typography } from "@mui/joy";
import { theme, BootstrapButton } from "../../template/theme";
import {Canvas} from "./canvas";
import { drawCanvas, postdraw } from "./hooks/draw";
import Snake from "./Snake";

export default function SnakeGame (props) { 
    let snake = new Snake([
      { x: 20, y: 100,},
      { x: 30, y: 100,},
      { x: 40, y: 100,},
      { x: 50, y: 100,},
      { x: 60, y: 100,},
    ])

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
        <Canvas drawcanvas={drawCanvas} postdraw={postdraw} snake={snake}/>
      </Sheet>
      </>
    )
}