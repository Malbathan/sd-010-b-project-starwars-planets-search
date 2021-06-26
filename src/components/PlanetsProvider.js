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
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
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

  const updateColumns = () => {
    if (filters.filterByNumericValues) {
      const addedColumnsInFilters = filters.filterByNumericValues.map(
        ({ column }) => column,
      );
      const newColumns = columns.filter(
        (column) => !addedColumnsInFilters.includes(column),
      );
      setColumns(newColumns);
    }
  };

  useEffect(updateColumns, [filters.filterByNumericValues]);

  const setFilterByName = ({ name, value }) => {
    setFilters({ ...filters, [name]: { name: value } });
  };

  const editFilterByNumericValues = ({ name, value }) => {
    setFilterByNumericValues({
      ...filterByNumericValues,
      [name]: value,
    });
  };

  const addFilterByNumericValues = () => {
    if (!filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [filterByNumericValues],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, filterByNumericValues],
      });
    }
  };

  const filtrateByNumericValues = () => {
    addFilterByNumericValues();
    const planets = getPlanets();
    const { column, comparison, value } = filterByNumericValues;
    const filteredplanets = planets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      default:
        return Number(planet[column]) === Number(value);
      }
    });
    setData(filteredplanets);
  };

  const state = {
    data,
    setFilterByName,
    editFilterByNumericValues,
    filterByNumericValues,
    filtrateByNumericValues,
    columns,
  };

  return <Provider value={ state }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
