import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ApiContext from './services/ApiContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const STARWARS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(STARWARS_API_URL);
      const promise = await response.json();
      const planets = promise.results.map((planet) => {
        const { residents, ...rest } = planet;
        return rest;
      });
      const head = planets[0];

      setData(promise.results);

      setTable(Object.keys(head));
    }
    fetchApi();
  }, []);

  const context = { data, setData, table };

  return (
    <ApiContext.Provider value={ context }>
      { children }
    </ApiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
