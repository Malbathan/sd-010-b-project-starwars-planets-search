import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const myContextValues = {
    data,
    setData,
    loading,
    setLoading,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((result) => result.json());
      const newResults = results.map((result) => result);
      setData(newResults);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <AppContext.Provider value={ myContextValues }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default AppProvider;
