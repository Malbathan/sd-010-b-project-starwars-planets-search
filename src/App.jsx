import React, { useEffect, useState } from 'react';
import './App.css';
import OptionsHeader from './Components/OptionsHeader';
import Table from './Components/Table';
import SwContext from './contexts/swContext';
import { getPlanets } from './services/API/starwarsApi';

function App() {
  const [swPlanets, setSwPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');
  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setSwPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const swContext = { data: swPlanets,
    filters: { filterByName: { name: filterName } },
    setFilterName };

  return (
    <SwContext.Provider value={ swContext }>
      <OptionsHeader />
      <Table />
    </SwContext.Provider>
  );
}

export default App;
