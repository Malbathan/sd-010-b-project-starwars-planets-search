import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchPlanets from '../services/Api';

function StarWarsProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planets = await fetchPlanets();
      return setPlanetsList(planets);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planetsList } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequires;

export default StarWarsProvider;
