import { styled, createTheme } from '@mui/material';
import { Button } from '@mui/material/';
import { Sheet } from '@mui/joy';

export const shades = {
  primary: {
    100: "rgb(224, 217, 252)",
    200: " #ea64b7",
    300: " #451233",
    400: " #3D2645",
    500: "rgb(52, 0, 33)",
    600: "#290129",
    700: " #000000",
    800: "#bdb8d2",
    900: 'goldenrod',
  },
}

export const style = { 
  palette: {
      light: shades.primary[100],
      bright: shades.primary[200],
      main: shades.primary[300],
      dark1: shades.primary[500],
      text: shades.primary[800],
      headers: shades.primary[100],
      background: shades.primary[600],
      shadow: shades.primary[200],
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Tourney Variable', 
        'Proza Libre', 
        'Hind',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      color: 'inherit',
      h1: {
        fontSize: "3rem",
        fontWeight: 500,
        fontFamily: "serif",
        fontStyle: "italic",
        color: shades.primary[100],
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
              color: theme.palette.text,
              '@media (max-width: 780px)' : {
                fontSize: '90%',
              }
            },
            body: { 
              fontFamily: 'Hind, sans-serif',
              backgroundColor: theme.palette.background,
              color: theme.palette.text,
              margin: 0,
              padding: 0,
              display: 'flex', 
              justifyContent: 'center',
              overflow: 'hidden',
              width: '100vw',
              height: '100vh',
            },
            a: { 
              color: theme.palette.text, 
              textDecoration: 'none',
              fontWeight: '800',
              fontFamily: 'Tourney Variable, sans-serif',
              '&:active': {
                color: 'goldenrod',
              },
              '&:hover': {
                color: 'goldenrod',
              },
            },
          }

export const BootstrapButton = styled(Button)({
  textTransform: 'none',
  fontSize: '80%',
  padding: '6px 6px',
  border: '1px solid',
  borderRadius: '1rem',
  marginRight: '.5rem',
  backgroundColor: 'goldenrod',
  borderColor:'goldenrod',
  color: theme.palette.dark1,
  fontWeight: '600',
  fontFamily: 'Tourney Variable',
  lineHeight: 1,
  // backgroundColor: 'inherit',
  '&:hover': {
    // color: theme.palette.text,
    backgroundColor: theme.palette.bright,
    borderColor: theme.palette.bright,
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
  color: theme.palette.text,
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

export const WorkSheets = styled(BodySheets)({
  width: '786px', 
  '@media (max-width: 780px)' : {
    width:'100%'
  }})

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

  export const navList={'@media (max-width: 780px)' : {
    width:'100vw',
    m:0,
    borderBottom:'4px dotted',
    borderColor: theme.palette.bright,
    boxShadow: '-.1rem 0 .4rem .4rem rgba(92, 100, 108, 0.1)',

  }}
  export const navSub={
    color: theme.palette.text,
    fontFamily: 'Hind, sans-serif', 
    fontWeight: '600', 
    marginBottom: '1rem',
    width:'100%',
    '@media (max-width: 780px)' : {
      display:'none'}
    }

  export const navBrand={ 
    fontFamily: 'Tourney Variable, Proza Libre, sans-serif',
    fontWeight: '600',
    color: theme.palette.light,
    fontSize: '3rem',
    '@media (max-width: 780px)' : {
    // fontSize: '2rem',
    width:'40vw'
  }}

  export const navTitle={
    fontFamily: 'Tourney Variable, Proza Libre, sans-serif',  
    fontWeight: '800', 
    fontSize: '1rem',
    color: theme.palette.bright,
    '@media (max-width: 780px)' : {
    }}
  
    export const tableRow={ 
      border: 0, p:0, m:0,   
      width: '100%',
      whiteSpace: 'normal',
      wordWrap: 'break-word'}

    export const socialNav={ 
      my: 3,  
      display: 'flex',  
      '@media (max-width: 780px)' : {m:0, flexDirection: 'row'}
  }