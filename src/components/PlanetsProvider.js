import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestApi from '../services/api';
import { getPlanets } from '../services/localStorage';
// import hookUpdateColumns from '../hooks/updateColumns';

const Context = createContext();
const { Provider, Consumer } = Context;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [formDataNumericFilter, setFormDataNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  useEffect(() => {
    const awaitRequest = async () => {
      await requestApi();
      const planets = getPlanets();
      setData(planets);
    };
    awaitRequest();
  }, []);

  useEffect(() => {
    if (filters.filterByName) {
      const planetNameRegex = new RegExp(filters.filterByName.name, 'i');
      const planets = getPlanets();
      const filteredplanets = planets.filter(({ name }) => planetNameRegex.test(name));
      setData(filteredplanets);
    }
  }, [filters.filterByName]);

  const filtrateByNumericValues = () => {
    const planets = getPlanets();
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length < 1) {
      setData(planets);
    }

    if (filterByNumericValues.length >= 1) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        const filteredPlanets = planets.filter((planet) => {
          switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          default:
            return Number(planet[column]) === Number(value);
          }
        });
        setData(filteredPlanets);
      });
    }
  };

  const updateColumns = () => {
    const addedColumnsInFilters = filters.filterByNumericValues.map(
      ({ column }) => column,
    );
    const newColumns = columns.filter(
      (column) => !addedColumnsInFilters.includes(column),
    );
    setColumns(newColumns);
    setFormDataNumericFilter({
      ...formDataNumericFilter,
      column: newColumns[0],
      value: '',
    });
  };

  const updateDataByNumericFilter = () => {
    if (filters.filterByNumericValues) {
      filtrateByNumericValues();
      updateColumns();
    }
  };

  useEffect(updateDataByNumericFilter, [filters.filterByNumericValues]);

  const setFilterByName = ({ name, value }) => {
    setFilters({ ...filters, [name]: { name: value } });
  };

  const editFilterByNumericValues = ({ name, value }) => {
    setFormDataNumericFilter({
      ...formDataNumericFilter,
      [name]: value,
    });
  };

  const addFilterByNumericValues = () => {
    if (!filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [formDataNumericFilter],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, formDataNumericFilter],
      });
    }
  };

  const restoreColumn = (newColumn) => {
    setColumns([...columns, newColumn]);
    const newNumericFilters = filters.filterByNumericValues.filter(
      (filterObj) => filterObj.column !== newColumn,
    );
    setFilters({
      ...filters,
      filterByNumericValues: newNumericFilters,
    });
  };

  const state = {
    data,
    setFilterByName,
    editFilterByNumericValues,
    formDataNumericFilter,
    addFilterByNumericValues,
    columns,
    filters,
    restoreColumn,
  };

  return <Provider value={ state }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
