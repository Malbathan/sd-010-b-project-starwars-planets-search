import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import planetsContext from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState('');
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanets() {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    setPlanets(results);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const data = {
    planets,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default Provider;
