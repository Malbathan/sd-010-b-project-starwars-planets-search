import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(endpoint).then((planets) => planets.json());
      setData(results.results);
      setDataSearch(results.results);
    };
    getPlanets();
  }, []);

  // if (search.length > 0) {
  //   setData(dataSearch);
  // } else {
  //   setData(dataAPI);
  // }

  const contextValue = {
    data,
    dataSearch,
    setDataSearch,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
