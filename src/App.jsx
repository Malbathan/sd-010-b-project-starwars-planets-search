import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import SwContext from './contexts/swContext';
import { getPlanets } from './services/API/starwarsApi';

function App() {
  const [swPlanets, setSwPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setSwPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const swContext = { data: swPlanets };
  return (
    <SwContext.Provider value={ swContext }>
      <div>
        <Table />
      </div>
    </SwContext.Provider>
  );
}

export default App;
