import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setPlanets] = useState({});
  const [filters, setFilters] = useState({ filterByName: '' });
  const contexValue = {
    data,
    setPlanets,
    filters,
    setFilters,
  };

  useEffect(() => {
    const response = async () => {
      const planets = await starWarsAPI();
      setPlanets(planets);
    };
    response();
  }, []);

  return (
    <StarWarsContext.Provider value={ contexValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default StarWarsProvider;
