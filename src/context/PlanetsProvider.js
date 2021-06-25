import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(apiUrl).then((res) => res.json());
      results.map((object) => delete object.residents);
      setData(results);
    };
    fetchPlanets();
  }, []);

  const planetsContext = { data };
  return (
    <PlanetsContext.Provider value={ planetsContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
