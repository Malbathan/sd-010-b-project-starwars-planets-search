import React from 'react';
import ReactDOM from 'react-dom';
/* import AuthProvider from './context/Provider'; */
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
