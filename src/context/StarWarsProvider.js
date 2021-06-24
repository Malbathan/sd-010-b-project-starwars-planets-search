import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchPlanets from '../services/Api';

function StarWarsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planets = await fetchPlanets();
      setPlanetsList(planets.results);
      setLoading(true);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planetsList, loading } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequires;

export default StarWarsProvider;
