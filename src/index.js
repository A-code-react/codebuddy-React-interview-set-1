import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
import worker from './mocks/browser';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      preventDuplicate
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
