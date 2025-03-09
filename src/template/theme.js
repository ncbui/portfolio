import { styled, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material/';
import { Sheet } from '@mui/joy';

export const shades = {
  primary: {
    100: "#DCD6F7",
    200: "#F76CC1",
    300: "#451233",
    400: "#3D2645",
    500: "#51153C",
    600: "#242124",
    700: "#000000",
  },
  body: {
    100: "#451233",
    200: "#3D2645",
    300: "#51153C",
  },
  background: {
    100: "#242124",
    200: "#000000",
  }
}

export const style = { 
  typography: {
    "fontFamily": `"Alegreya", "Niramit", "Roboto", sans-serif`,
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
  palette: {
    primary: {
      light: shades.primary[100],
      bright: shades.primary[200],
      main: shades.primary[300],
      dark1: shades.primary[500],
      text1: shades.primary[600],
    }
  },
  }

export const theme = createTheme(style)

export const global = {
            html: {
              fontSize: "100%",
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
  fontSize: '75%',
  padding: '6px 12px',
  border: '2px dotted',
  borderRadius: '1rem',
  marginRight: '.5rem',
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  lineHeight: 1.5,
  backgroundColor: 'inherit',
  '&:hover': {
    // backgroundColor: theme.palette.primary.bright,
    backgroundColor: 'goldenrod',
    borderColor:'goldenrod',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
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
