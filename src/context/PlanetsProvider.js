import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setData(results.results)));
  };
  return (
    <PlanetsContext.Provider value={ { data, setData, getPlanets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
