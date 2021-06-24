import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function ApiData({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getApi() {
      const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await api.json();
      setPlanets(results);
    }

    getApi();
  }, []);

  return (
    <AppContext.Provider value={ planets }>
      {children}
    </AppContext.Provider>
  );
}

ApiData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiData;
