import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
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
  const renderPlanetNames = () => swPlanets
    .map(({ name }, index) => <span key={ index }>{name}</span>);
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
