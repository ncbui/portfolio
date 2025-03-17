import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/joy';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Work from './pages/Work';
import ErrorPage from './pages/ErrorPage';
import {CssBaseline, GlobalStyles, } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import { theme, global } from './template/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={global} />
      <Container 
        sx={{
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
        }}
        >
          <NavMenu/>  
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route element={<ErrorPage />} />
          </Routes>
      </Container>
    </ThemeProvider>
  );
}