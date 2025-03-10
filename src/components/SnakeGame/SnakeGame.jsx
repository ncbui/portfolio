import { Typography, Container } from "@mui/joy";
import { theme } from "../../template/theme";
import Canvas from "./canvas";

export default function SnakeGame () { 
    return (
        <Container sx={{
            display:'flex', 
            flexDirection:'column', 
            // justifyContent:'center',
            border: '5px dashed',
            borderColor: 'pink',
            height: '90%',
            }}>
            <Typography level="h1" variant="h1" sx={{color: theme.palette.primary.main, width: '100%', alignSelf:'center', '@media (max-width: 780px)' : {width:'20vw'}}}>
                Snake
          </Typography>
          <Typography level="h5">
                Use the arrow keys to guide your snake to food.
                Eat well. and outlive the other snake.
          </Typography>
          <Typography level="h3" variant="body-md">
             <Canvas />
          </Typography>
        </Container>
    )
}