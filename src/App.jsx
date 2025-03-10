import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/joy';
import ErrorBoundary from "./components/ErrorBoundary";
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Work from './pages/Work';
import { theme } from "./template/theme";
import ErrorPage from './pages/ErrorPage';

export default function App() {
  return (
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
        border:'5px dotted',
        borderColor: theme.palette.primary.bright,
        '@media (max-width: 780px)' : {
          flexDirection:'column',
          maxWidth: '100vw',
          overflowX: 'hidden',
          overflowY: 'auto',
          m: 0,
          p: 0,
        },
        '@media (min-height: 900px)' : {
            marginY: '10vh',
            height:'60vh',
          }
      }}
      >
      <ErrorBoundary>
        <NavMenu/>  
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route element={<ErrorPage />} />
        </Routes>
        </ErrorBoundary>
    </Container>
  );
}