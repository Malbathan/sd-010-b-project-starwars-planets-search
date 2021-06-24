import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function Provider({ children }) {
  const [data, setData] = useState(undefined);

  async function getUser() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const { results } = await response.json();
    setData(results);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <PlanetContext.Provider value={ data }>
      {children}
    </PlanetContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Provider;
