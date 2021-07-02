import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchPlanets from '../api/fetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
    const getData = async () => {
      const planets = await fetchPlanets();
      setData(planets);
      // setLoading(false)
    };
    getData();
    // console.log(getData());
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
