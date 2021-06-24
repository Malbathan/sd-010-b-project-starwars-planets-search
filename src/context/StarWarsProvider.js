import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsData from '../services/StarWarsData';

function StarWarsProvider({ children }) {
  const [planets, setplanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await planetsData();
      setplanets(results);
    };
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planets } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
