import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const { Provider } = DataContext;

const filterByName = {
  filterByName: '',
  filterByNumericValues: [],
};

function DataProvider({ children }) {
  const [filters, setFilters] = useState(filterByName);
  const [data, setData] = useState([]);
  useEffect(() => {
    function fetchPlanets() {
      return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
    }
    fetchPlanets().then(({ results }) => setData(results));
  }, []);
  return (
    <Provider value={ { data, filters, setFilters } }>
      { children }
    </Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
