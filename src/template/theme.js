import { styled, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material/';
import { Sheet } from '@mui/joy';

export const shades = {
  primary: {
    100:  " #DCD6F7",
    200:  "rgb(197, 48, 140)",
    300:  "#451233",
    400:  " #3D2645",
    500:  " #51153C",
    600:  " #242124",
    700:  " #000000",
    800:  " #9198e5",
  },
}

export const style = { 
  
  palette: {
    primary: {
      light: shades.primary[100],
      bright: shades.primary[200],
      main: shades.primary[300],
      dark1: shades.primary[500],
      text1: shades.primary[600],
    }},
  }

export const theme = createTheme(style)

export const global = {
            html: {
              fontSize: "90%",
              color: shades.primary[600],
              '@media (max-width: 780px)' : {
                fontSize: '90%',
              }
            },
            body: { 
              backgroundColor: shades.primary[100],
              color: shades.primary[600],
              margin: 0,
              padding: 0,
              display: 'flex', 
              justifyContent: 'center',
              overflow: 'hidden',
              width: '100vw',
              height: '100vh',
              background: 'radial-gradient(ellipse at 10% 10%,rgb(145, 152, 229, .6) 5% ,rgb(107, 10, 201, .3))',
              },
            a: { 
              color: shades.primary[500], 
              textDecoration: 'none',
              '&:active': {
                color: 'goldenrod',

              },
            },
          }

export const BootstrapButton = styled(Button)({
  textTransform: 'none',
  fontSize: '85%',
  fontWeight: '900',
  padding: '6px 12px',
  border: '1px solid',
  borderRadius: '.5rem',
  marginRight: '.5rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.light,
  lineHeight: 1.5,
  // backgroundColor: 'inherit',
  '&:hover': {
    // backgroundColor: theme.palette.primary.bright,
    backgroundColor: 'goldenrod',
    borderColor:'goldenrod',
  },
  '&:active': {
    boxShadow: 'none',
    borderColor:'goldenrod',
  },
  '&:focus': {
    boxShadow: `0rem 0rem 0.5rem 0.2rem ${shades.primary[200] }`,
  },
});

export const Sheets = styled(Sheet)({
  backgroundColor: 'inherit',
  color: shades.primary[600],
  m:0,
  paddingTop: '2rem', 
  paddingLeft: '1rem',
  // boxShadow: '-.1rem 0 .4rem .4rem rgba(92, 100, 108, 0.1)',
  '@media (max-width: 780px)' : {
    padding:'1rem',
    width:'100vw',
    m:0,
  }
});


export const BodySheets = styled(Sheet)({
  backgroundColor: 'inherit',
  margin:0,
  paddingTop: '3rem', 
  paddingLeft: '4rem',
  paddingRight: '2rem',
  width:'80vw',
  overflow:'auto',
  height: '100vh',
  justifyContent: 'space-between',
  // boxShadow: '-.1rem 0 .4rem .4rem rgba(92, 100, 108, 0.1)',
  '@media (max-width: 780px)' : {
    padding: '1rem',
    width:'100vw',
    m:0,
  }
  });
