import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import reqPlanets from '../services/servicesApi';

const ContextFromPlanets = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await reqPlanets();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = { data };

  return (
    <ContextFromPlanets.Provider value={ contextValue }>
      { children }
    </ContextFromPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { ContextFromPlanets, Provider };
