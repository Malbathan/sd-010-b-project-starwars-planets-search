import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  // didMount
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((resp) => resp.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const globalContext = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ globalContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;
export default PlanetsProvider;
