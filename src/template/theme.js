import { styled, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material/';
import { Sheet } from '@mui/joy';


export const shades = {
  primary: {
    100: "#DCD6F7",
    200: "rgb(234, 2, 145)",
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
  
  palette: {
    primary: {
      light: shades.primary[100],
      bright: shades.primary[200],
      main: shades.primary[300],
      dark1: shades.primary[500],
      text: shades.primary[300],
      headers: shades.primary[300],
      background: shades.primary[300],
      shadow: shades.primary[200],
    }},
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 500,
        fontFamily: "serif",
        fontStyle: "italic",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Hind, sans-serif',
          },
        },
      },
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
              fontFamily: 'Hind, sans-serif',
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
  borderColor: theme.palette.primary.text,
  color: theme.palette.primary.text,
  lineHeight: 1.5,
  backgroundColor: 'inherit',
  '&:hover': {
    color: theme.palette.primary.text,
    backgroundColor: 'goldenrod',
    borderColor:'goldenrod',
  },
  '&:active': {
    boxShadow: 'none',
  },
  '&:disabled': {
    borderColor: theme.palette.secondary.text,
    color: theme.palette.secondary.text,
  },
});

export const Sheets = styled(Sheet)({
  fontFamily: 'Hind, sans-serif',
  fontWeight: '500',
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
  fontFamily: 'Hind, sans-serif',
  fontWeight: '500',
  backgroundColor: 'inherit',
  margin:'1rem 2rem',
  paddingTop: '3rem', 
  paddingLeft: '4rem',
  paddingRight: '2rem',
  width:'80vw',
  overflow:'auto',
  height: '100vh',
  justifyContent: 'space-between',
  // boxShadow: '-.1rem 0 .4rem .4rem rgba(92, 100, 108, 0.1)',
  '@media (max-width: 780px)' : {
    padding: '1vh 1vw',
    width:'90vw',
    m: 0,
  }
  });

  export const appContainer={
    display: 'flex',
    flexDirection:'row', 
    width: '100vw',
    maxWidth: '968px',
    height: '100vh',
    overflow: 'hidden',
    m: 0,
    p: 0,
    '@media (max-width: 780px)' : {
      flexDirection:'column',
      maxWidth: '100vw',
      overflowX: 'hidden',
      overflowY: 'auto',
      m: 0,
      p: 0,
    }
  }

  export const navList={'@media (max-width: 780px)' : {width:'100vw',
     m:0,
     borderBottom:'4px dotted',
     borderColor: theme.palette.primary.bright,
     boxShadow: '-.1rem 0 .4rem .4rem rgba(92, 100, 108, 0.1)',

  }}
  export const navSub={
      color: theme.palette.primary.text,
      fontFamily: ' Proza Libre, sans-serif', 
      fontWeight: '600', 
      marginBottom: '1rem',
      width:'100%',
      '@media (max-width: 780px)' : {
        display:'none'}}

  export const navBrand={ 
    fontFamily: 'Tourney Variable, Proza Libre, sans-serif',
    fontWeight: '600',
     color: theme.palette.primary.text,
     fontSize: '2rem',
     '@media (max-width: 780px)' : {
      fontSize: '1.6rem',
      width:'25vw'
    }}

  export const navTitle={
    fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
    fontWeight: '800', 
    fontSize: '1rem',
    color: theme.palette.primary.bright,
    '@media (max-width: 780px)' : {
    }}
  
    export const tableRow={ 
      border: 0, p:0, m:0,   
      width: '100%',
      whiteSpace: 'normal',
      wordWrap: 'break-word'}