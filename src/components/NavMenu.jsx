import { Link } from 'react-router-dom';
import { Typography, List, ListItem, ListSubheader } from '@mui/joy';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import { Sheets } from '../template/theme';


export default function NavMenu() {
  const theme = useTheme()
  return (
    <Sheets>
      <List sx={{width:'20vw', '@media (max-width: 786px)' : {width:'90%'}}}>
        <List sx={{display:'flex', flexDirection:'col', width:'20rem', '@media (max-width: 786px)' : {flexDirection:'row', justifyContent:'space-between'}}}>
        <ListSubheader sx={{width:'20rem', '@media (max-width: 780px)' : {width:'100vw'}}}>
          <Typography level="h1" sx={{color: theme.palette.primary.main, fontSize: '3rem', '@media (max-width: 780px)' : {fontSize: '1.6rem', width:'20vw'}}}>
            <Link to="/" level='inherit'>
              Cam Bui  
            </Link>
          </Typography>
        </ListSubheader>
        <ListItem>
          <Typography level="h5" sx={{color: theme.palette.primary.bright,'@media (max-width: 780px)' : {fontSize: '1rem',}}}>
            Fullstack Devops Engineer
          </Typography>
        </ListItem>
        </List>
        <ListItem sx={{marginBottom: '1rem', maxWidth:'15vw', '@media (max-width: 780px)' : {marginBottom:'1rem', display:'none'}}}>
          <Typography level='body-sm' sx={{color: theme.palette.primary.main,}}>
            I enable dev teams to customize GitOps best practices for their needs
          </Typography>
        </ListItem>
        <List sx={{'@media (max-width: 780px)' : {flexDirection: 'row', justifyContent:'start', m:0, p:0}}}>
          <List sx={{'@media (max-width: 780px)' : {flexDirection: 'row',}}}>
          <ListItem >
              <Typography level='body-md'>
                <Link to="/" >
                about
                </Link>
              </Typography>
          </ListItem >
          <ListItem>
            <Typography level='body-md'>
              <Link to="/work" level='body-md'>
                work
              </Link>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography level='body-md'>
              <Link to="/projects" level='body-md'>
                projects
              </Link>
            </Typography>
          </ListItem>
          </List>
          <ListSubheader sx={{
            my: 3, 
            '@media (max-width: 780px)' : {m:0}
            }}>
            <Typography>
                <Link to="https://www.linkedin.com/in/cambui/" target="_blank" rel="noopener noreferrer"><GitHub sx={{fontSize:'2.5rem', '@media (max-width: 780px)' : {fontSize:'2rem'}}}/></Link>
                <Link to="https://www.linkedin.com/in/cambui/" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{fontSize:'2.5rem', '@media (max-width: 780px)' : {fontSize:'2rem'}}}/></Link>
            </Typography>
          </ListSubheader>
        </List>
      </List>
    </ Sheets>
  );
}