import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import { fetchPlanets } from '../services/planetsAPI';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);

  useEffect(() => {
    getPlanets();
    getTableTitles();
  }, []);

  // Guarda todos os planetas
  async function getPlanets() {
    const planets = await fetchPlanets();

    setPlanets(planets);
  };

  // Guarda o nome dos titulos das tabelas
  // SOURCE * https://stackoverflow.com/questions/206988/how-do-i-unset-an-element-in-an-array-in-javascript *
  async function getTableTitles() {
    const planets = await fetchPlanets();
    const titles = Object.keys(planets[0]);
    titles.splice(titles.indexOf('residents') , 1);

    setTableTitles(titles);
  };

  const planetContext = {
    planets,
    tableTitles,
  }

  return (
    <PlanetContext.Provider value={ planetContext }>
      { children }
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;