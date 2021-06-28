import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import startwarsApi from '../services/starwarsApi';

function Provider({ children }) {
  const [data, setData] = useState();
  const [tableHeaders, setTableHeaders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    async function planetsApi() {
      const results = await startwarsApi();
      setData(results);
      setTableHeaders(Object.keys(results[0]));
      setIsLoading(false);
    }
    planetsApi();
  }, []);

  const context = {
    data,
    isLoading,
    tableHeaders,
    filterByName,
    setFilterByName,
    columns,
    setColumns,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
