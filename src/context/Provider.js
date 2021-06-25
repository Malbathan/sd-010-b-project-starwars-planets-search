import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import startwarsApi from '../services/starwarsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterByName, setFilterByName] = useState({ name: '' });

  useEffect(() => {
    async function planetsApi() {
      const response = await startwarsApi();
      setData(response);
      setIsLoading(false);
    }
    planetsApi();
  }, []);

  const context = {
    data,
    isLoading,
    filterByName,
    setFilterByName,
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
