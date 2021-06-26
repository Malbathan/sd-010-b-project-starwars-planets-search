import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DataContext from '../context/DataContext';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    async function fetchApia() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const promise = await response.json();
      const result = promise.results[0];

      setData(promise.results);
      setTableHead(Object.keys(result));
    }
    fetchApia();
  }, []);

  const contextValue = { data, setData, tableHead };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DataProvider;
