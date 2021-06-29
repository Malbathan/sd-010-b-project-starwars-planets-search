import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';
import { fetchPlanets } from '../services/planetsAPI';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filter, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '0',
        },
      ],
    },
  );

  useEffect(() => {
    getPlanets();
    getTableTitles();
  }, []);

  // Guarda todos os planetas
  async function getPlanets() {
    const planets = await fetchPlanets();
    setFilteredPlanets(planets);
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
    filter,
    setFilter,
    filteredPlanets,
    setFilteredPlanets,
  }

  return (
    <PlanetContext.Provider value={ planetContext }>
      { children }
    </PlanetContext.Provider>
  );
}

export default PlanetProvider;