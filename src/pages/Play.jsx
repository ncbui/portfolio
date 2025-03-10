import { BodySheets, BootstrapButton } from '../template/theme';
import { theme } from '../template/theme';
import SnakeGame from '../components/SnakeGame/SnakeGame';
import { Typography , Container, Button} from '@mui/material';

export default function Play() {
  return (
    <BodySheets>
      <Container sx={{
        display:'flex', 
        flexDirection:'column', 
        alignItems: 'center',
        border: '5px dashed',
        borderColor: 'pink',
        height: '90%',
        }}>
        <Typography level="h4" variant="h4" sx={{color: theme.palette.primary.main, alignSelf:'center', '@media (max-width: 780px)' : {width:'20vw'}}}>
            Snake
        </Typography>
        <Typography level="h5">
            Use the arrow keys to guide your snake to food.
        </Typography>
        <Typography level="h5">
            Eat well. and outlive the other snake.
        </Typography>
        <Typography variant="title" color="inherit" noWrap>
            &nbsp;
          </Typography>
          <BootstrapButton>Start</BootstrapButton>
          <Typography variant="title" color="inherit" noWrap>
            &nbsp;
          </Typography>
        <SnakeGame />
        </Container>
    </BodySheets>
  );
}