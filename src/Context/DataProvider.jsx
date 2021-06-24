import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const { Provider } = DataContext;

function DataProvider({ children }) {
  // console.log(children)
  const [data, setData] = useState([]);
  useEffect(() => {
    function fetchPlanets() {
      return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
    }
    fetchPlanets().then(({ results }) => setData(results));
  }, []);
  return (
    <Provider value={ { data } }>
      { children }
    </Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};

export default DataProvider;
