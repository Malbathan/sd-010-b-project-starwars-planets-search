import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();
const { Provider, Consumer } = Context;

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const req = await fetch(endpoint);
      const { results } = await req.json();
      setData(results);
    };
    requestApi();
  }, []);

  return <Provider value={ { data } }>{children}</Provider>;
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PlanetsProvider as Provider, Consumer, Context };
