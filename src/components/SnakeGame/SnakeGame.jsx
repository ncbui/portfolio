import { Typography, Container } from "@mui/joy";
import { theme, BootstrapButton, Sheets } from "../../template/theme";
import { useState } from "react";
import {SnakeCanvas} from "./SnakeCanvas";
import Snake from "./Snake";

export default function SnakeGame () { 
 
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
        <Typography level="h4" variant="h4" sx={{color: theme.palette.primary.main, alignSelf:'center', '@media (max-width: 780px)' : {width:'50vw'}}}>
            Anaconda          
            <Typography variant= "body-sm" level="body-sm">
            Snake meets Blockade. 
            </Typography>
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
        <SnakeCanvas/>
        </Container>
      </>
    )
}
