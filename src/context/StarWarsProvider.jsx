import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsStarWars from '../services/fetchStarWars';

export const StarWarsContext = createContext({});

function StarWarsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);

  async function getPlanets() {
    const data = await fetchPlanetsStarWars();
    setPlanetsStarWars(data);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  const objDefault = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [name, setName] = useState(objDefault);

  return (
    <StarWarsContext.Provider value={ { planetsStarWars, name, setName } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,

};

export default StarWarsProvider;
