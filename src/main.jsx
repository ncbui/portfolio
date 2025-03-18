import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import '@fontsource/hind';
import '@fontsource-variable/tourney';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </HashRouter>
  </React.StrictMode>
);