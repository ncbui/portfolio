import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import {CssBaseline, GlobalStyles, } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import { theme, global } from './template/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={global} />
          <App />
      </ThemeProvider>
      </HashRouter>
  </React.StrictMode>
);