import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsStarWars from '../services/fetchStarWars';

export const StarWarsContext = createContext({});

const objDefault = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function StarWarsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [name, setName] = useState(objDefault);

  async function getPlanets() {
    const data = await fetchPlanetsStarWars();
    setPlanetsStarWars(data);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planetsStarWars, name, setName } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
