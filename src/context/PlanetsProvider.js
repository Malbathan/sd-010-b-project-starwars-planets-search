import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/PlanetsApi';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(initialState);

  async function getData() {
    setData(await fetchPlanets());
  }

  function handleName({ target: { id, value } }) {
    setFilters({
      ...filters,
      filterByName: { [id]: value.toLowerCase() },
    });
  }

  function addFilter(filter) {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filter],
    });
  }

  useEffect(() => { getData(); }, []);
  const contextValue = {
    data,
    filters,
    handleName,
    addFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: func }.isRequired;

export default PlanetsProvider;
