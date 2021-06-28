import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/PlanetsApi';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
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

  function delFilter(column) {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((fil) => fil.column !== column),
    });
  }

  function setOrder(order) {
    setFilters({
      ...filters, order });
  }

  useEffect(() => { getData(); }, []);
  const contextValue = {
    data,
    filters,
    handleName,
    addFilter,
    delFilter,
    setOrder,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: func }.isRequired;

export default PlanetsProvider;
