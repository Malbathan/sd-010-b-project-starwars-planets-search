import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/Api/StarWarsApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterByNumeric, setFilterByNumeric] = useState([{
    column: '',
    comparison: '',
    value: '',
  },
  ]);

  useEffect(() => {
    const getApi = async () => {
      const teste = await fetchApi();
      await setData(teste);
    };
    getApi();
  }, []);

  // const filterNumeric = ({ target: { name, value } }) => {
  //   setFilterByNumeric({
  //     ...filterByNumeric,
  //     [name]: value,
  //   });
  // };
  const filterNumeric = ({ target: { name, value } }) => {
    setFilterByNumeric({
      ...filterByNumeric,
      [name]: value,
    });
  };

  const context = {
    setFilter,
    filterNumeric,
    data,
    filterByNumeric,
    filters: {
      filterByName: { name: filter },
    },
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
