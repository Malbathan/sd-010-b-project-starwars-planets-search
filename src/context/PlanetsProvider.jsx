import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlanets = async () => {
    setLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json().results;
    planets.forEach((planet) => delete planet.residents);

    setData(planets);
    setLoading(false);
  };

  return (
    <PlanetsContext.Provider value={ { data, loading, fetchPlanets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
