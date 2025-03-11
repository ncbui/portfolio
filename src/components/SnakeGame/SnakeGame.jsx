import { Sheet, Typography, Container } from "@mui/joy";
import { theme, BootstrapButton } from "../../template/theme";
import {SnakeCanvas} from "./SnakeCanvas";
import Snake from "./Snake";

export default function SnakeGame () { 
    let snake = new Snake([
      { x: 20, y: 100,},
      { x: 30, y: 100,},
      { x: 40, y: 100,},
      { x: 50, y: 100,},
      { x: 60, y: 100,},
    ])

    return (
      <>
      <Container sx={{
        display:'flex', 
        flexDirection:'column', 
        alignItems: 'center',
        height: '90%',
        '@media (max-width: 780px)' : {
          m:'-.5rem', p:0
        }
        }}>
        <Typography level="h4" variant="h4" sx={{color: theme.palette.primary.main, alignSelf:'center', '@media (max-width: 780px)' : {width:'20vw'}}}>
            Anaconda
        </Typography>
        <Typography level="body-sm" textAlign={'center'}>
            Snake meets Blockade. 
            </Typography>
            <Typography level="body-sm" textAlign={'center'}>
            Built with React, Vite, HTML Canvas, and requestAnimationFrame.
        </Typography>
        <Typography level="h5">
          Use the arrow keys to guide your snake to food. 
        </Typography>
        <Typography level="h5">
          Eat well. Live long and prosper.
        </Typography>
        <Typography variant="title" color="inherit" noWrap>
        &nbsp;
        </Typography>
        <BootstrapButton id="startButton">Start</BootstrapButton>
        <Typography variant="title" color="inherit" noWrap>
        &nbsp;
        </Typography>
        <Sheet sx={{backgroundColor:theme.palette.primary.dark, width:'25rem', height: '20rem'}}>
          <SnakeCanvas snake={snake}/>
        </Sheet>
        </Container>
      </>
    )
}
