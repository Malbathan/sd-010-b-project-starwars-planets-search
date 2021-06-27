import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [dataAPI, setDataAPI] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const myContextValues = {
    loading,
    setLoading,
    dataAPI,
    setDataAPI,
    data,
    setData,
    filters,
    setFilters,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((result) => result.json());
      const newResults = results.map((result) => result);
      setDataAPI(newResults);
      setData(newResults);
      setLoading(false);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const newData = dataAPI.filter((obj) => obj.name.includes(name));
    setData(newData);
  }, [dataAPI, filters]);

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
