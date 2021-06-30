import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/PlanetsApi';

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

const initialColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const initialFilter = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(initialState);
  const [selectColumns, setSelectColumns] = useState(initialColumns);
  const [selectFilter, setSelectFilter] = useState(initialFilter);
  const [selectOrder, setSelectOrder] = useState(initialState.order);

  async function getData() {
    setData(await fetchPlanets());
  }

  function handleName({ target: { id, value } }) {
    setFilters({
      ...filters,
      filterByName: { [id]: value.toLowerCase() },
    });
  }

  function addFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, selectFilter],
    });
  }

  function delFilter(column) {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((fil) => fil.column !== column),
    });
  }

  function handleFilter({ target: { id, value } }) {
    setSelectFilter({ ...selectFilter, [id]: value });
  }

  function handleOrder({ target: { name, value } }) {
    setSelectOrder({ ...selectOrder, [name]: value });
  }

  function setOrder() {
    setFilters({
      ...filters, order: selectOrder });
  }

  useEffect(() => { getData(); }, []);
  useEffect(() => {
    const fetchColumns = initialColumns.filter((filter) => !filters.filterByNumericValues
      .map(({ column }) => column).includes(filter));
    setSelectColumns(fetchColumns);
    setSelectFilter({ ...initialFilter, column: fetchColumns[0] });
  }, [filters.filterByNumericValues]);

  const contextValue = {
    data,
    filters,
    selectFilter,
    selectColumns,
    handleName,
    handleFilter,
    handleOrder,
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
