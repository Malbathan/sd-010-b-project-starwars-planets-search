import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await request.json();
    setData(result.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, fetchApi } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
