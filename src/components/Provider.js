import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchApiStarwars from '../services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const [fetching, setFetching] = useState(false);
  const [options] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    // const fetchApiStarwars = () => {
    //   fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    //     .then((response) => response.json())
    //     .then(({ results }) => setData(results));
    // };
    const fetchApi = async () => {
      const response = await fetchApiStarwars();
      setData(response);
    };

    fetchApi();
  }, [fetching]);

  const newFilter = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const contextValue = {
    data,
    setData,
    fetching,
    setFetching,
    filters,
    setFilters,
    newFilter,
    options,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
