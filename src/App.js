import React from 'react';
import './App.css';
import ProviderContext from './components/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <span>Inicio</span>
    </ProviderContext>
  );
}

export default App;
