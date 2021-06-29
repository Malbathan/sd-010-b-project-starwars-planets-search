import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ApiContext from './services/ApiContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [filter, setFilter] = useState(null);

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

  function filterName(name) {
    const filteredPlanets = data.filter(
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    setFilter(filteredPlanets);
  }

  return (
    <ApiContext.Provider value={ { data, setData, table, filter, filterName } }>
      { children }
    </ApiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
