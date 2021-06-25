import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestApi from '../services/api';
import { getPlanets } from '../services/localStorage';

const Context = createContext();
const { Provider, Consumer } = Context;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

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

  const setFilterByName = ({ name, value }) => {
    setFilters({ ...filters, [name]: { name: value } });
  };

  const setFilterByNumericValues = ({ name, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: { ...filters.filterByNumericValues, [name]: value },
    });
  };

  const filterByNumericValues = () => {
    const planets = getPlanets();
    const { filterByNumericValues: { column, comparison, value } } = filters;
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
    setFilterByNumericValues,
    filterByNumericValues,
  };

  return <Provider value={ state }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
