import React from 'react';
import './App.css';
import PlanersList from './components/PlanetsList';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <PlanersList />
    </Provider>
  );
}

export default App;
