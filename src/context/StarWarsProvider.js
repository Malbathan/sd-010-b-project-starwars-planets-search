import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/Api/StarWarsApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const teste = await fetchApi();
      await setData(teste);
    };
    getApi();
  }, []);

  const context = {
    data,
    setFilter,
    filters: { filterByName: { name: filter } },
  };

  return (
    <StarWarsContext.Provider
      value={ context }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
