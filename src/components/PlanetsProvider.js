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
    if (Object.keys(filters).length > 0) {
      const planetNameRegex = new RegExp(filters.filterByName.name, 'i');
      const planets = getPlanets();
      const filteredplanets = planets.filter(({ name }) => planetNameRegex.test(name));
      setData(filteredplanets);
    }
  }, [filters]);

  const setFilterByName = async (filter, name) => {
    setFilters({ ...filters, [filter]: { name } });
  };

  const setMultipleFilters = async ({ name, value }) => {
    await setFilterByName(name, value);
  };

  return <Provider value={ { data, setMultipleFilters } }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
