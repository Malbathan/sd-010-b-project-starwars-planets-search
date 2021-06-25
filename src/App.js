import React from 'react';
import './App.css';
import PlanetsList from './components/PlanetsList';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsList />
    </PlanetsProvider>
  );
}

export default App;
