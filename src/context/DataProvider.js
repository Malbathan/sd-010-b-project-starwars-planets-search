import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getApiPlanets() {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((results) => results.json());
      setData(result.results);
    }
    getApiPlanets();
  }, []);

  return (
    <main>
      <MyContext.Provider value={ { data } }>
        { children }
      </MyContext.Provider>
    </main>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
