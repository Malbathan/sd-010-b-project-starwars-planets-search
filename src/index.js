import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderStarWars from './context/ProviderStarWars';

ReactDOM.render(
  <ProviderStarWars>
    <App />
  </ProviderStarWars>,
  document.getElementById('root'),
);
