import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/PlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});

  async function getData() {
    setData(await fetchPlanets());
  }
  useEffect(() => { getData(); }, []);

  const contextValue = {
    data,
    getData,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: func }.isRequired;

export default PlanetsProvider;
