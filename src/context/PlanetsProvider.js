import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/api';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setData(response);
    };
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default PlanetsProvider;
