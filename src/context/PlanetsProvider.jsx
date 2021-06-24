import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,

};

export default PlanetsProvider;
