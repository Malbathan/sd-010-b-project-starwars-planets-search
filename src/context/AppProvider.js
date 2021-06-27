import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const myContextValues = {
    planets,
    setPlanets,
    loading,
    setLoading,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      const newResults = results.map(({ name }) => name);
      setPlanets(newResults);
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
