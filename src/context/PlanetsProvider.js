import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  const fetchApi = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await request.json();
    setData(result.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = ({ value }) => {
    setFilterByName(value);
  };

  const context = {
    data,
    fetchApi,
    handleChange,
    filters: {
      filterByName: {
        name: filterByName,
      },
    },
  };

  return (
    <PlanetsContext.Provider value={ { context } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
