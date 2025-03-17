import { Routes, Route } from 'react-router-dom';
import {CssBaseline, GlobalStyles, } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import { Container } from '@mui/joy';
import { theme, global, appContainer } from './template/theme';
import ErrorPage from './pages/ErrorPage';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={global} />
      <Container 
        sx={appContainer}
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