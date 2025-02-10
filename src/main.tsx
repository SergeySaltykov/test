import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router';
import './app/styles/global.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

/*TODO настроить react-router под vite*/
root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);
