import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import {GlobalStyles } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import { theme, global } from './template/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={global} />
          <App />
      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);