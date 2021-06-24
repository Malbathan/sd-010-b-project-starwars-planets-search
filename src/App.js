import React from 'react';
import './App.css';
import PlanetTable from './components/PlanetTable';
import ProviderContext from './components/ProviderContext';

function App() {
  return (
    <ProviderContext>
      <span>Inicio</span>
      <PlanetTable />
    </ProviderContext>
  );
}

export default App;
