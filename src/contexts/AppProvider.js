import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [dataAPI, setDataAPI] = useState([]);
  const [resultsApi, setResultsApi] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: '0',
    }],
  });
  const contextValues = {
    dataAPI,
    setDataAPI,
    resultsApi,
    setResultsApi,
    filters,
    setFilters,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const APIResult = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(APIResult).then((result) => result.json());
      const newResults = results.map((result) => result);
      setDataAPI(newResults);
      setResultsApi(newResults);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const newData = dataAPI.filter((planet) => planet.name.includes(name));
    setResultsApi(newData);
  }, [dataAPI, filters]);

  return (
    <AppContext.Provider value={ contextValues }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default AppProvider;
