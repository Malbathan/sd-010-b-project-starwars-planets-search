import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/PlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  async function getData() {
    setData(await fetchPlanets());
  }

  function handleName({ target: { id, value } }) {
    setFilters({ ...filters, filterByName: { [id]: value.toLowerCase() } });
  }

  useEffect(() => { getData(); }, []);
  const contextValue = {
    data,
    filters,
    handleName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: func }.isRequired;

export default PlanetsProvider;
