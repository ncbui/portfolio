import { Typography, Container, Sheet } from "@mui/joy";
import { theme } from "../../template/theme";
import {Canvas} from "./canvas";
import { predraw, draw, postdraw } from "./hooks/draw";

export default function SnakeGame (props) { 
    return (
      <Sheet sx={{backgroundColor:theme.palette.primary.dark, width:'50%', height: '60%'}}>
        <Canvas draw={draw} predraw={predraw} postdraw={postdraw}/>
      </Sheet>
    )
}