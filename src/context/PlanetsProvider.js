import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchPlanets from '../api/fetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
    const getData = async () => {
      const { results } = await fetchPlanets();
      // console.log(results);
      setData(results);
    };
    getData();
  }, []);

  return (
    <ContextPlanets.Provider value={ contextValue }>
      {children}
    </ContextPlanets.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default PlanetsProvider;
