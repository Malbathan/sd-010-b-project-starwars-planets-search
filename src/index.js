import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StarWarsProvider from './Context/StarWarsProvider';

ReactDOM.render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>,
  document.getElementById('root'),
);
