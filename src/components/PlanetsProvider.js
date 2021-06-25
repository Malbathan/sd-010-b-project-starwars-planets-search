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

  return <Provider value={ { data } }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
