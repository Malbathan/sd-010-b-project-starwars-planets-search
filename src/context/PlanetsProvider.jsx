import React, { createContext, useEffect, useState } from 'react';
import fetchPlanetsStarWars from '../services/fetchStarWars';

export const PlanetsContext = createContext({});

function PlanetsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);

  async function getPlanets() {
    const data = await fetchPlanetsStarWars();
    setPlanetsStarWars(data);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planetsStarWars } }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
