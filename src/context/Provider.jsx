import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);

  async function getUser() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const { results } = await response.json();
    setData(results);
    console.log(results);
  }

  useEffect(() => {
    getUser();
  }, []);

  const globalContext = {
    data,
  };
  return (
    <PlanetContext.Provider value={ globalContext }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;
export default PlanetProvider;
