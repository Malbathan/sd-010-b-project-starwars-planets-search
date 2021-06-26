import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContextFromPlanets = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const locationPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const api = await fetch(locationPlanets);
    const response = await api.json();
    const result = response.results;
    result.forEach((resis) => delete resis.residents);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contex = { data };

  return (
    <ContextFromPlanets.Provider value={ contex }>
      { children }
    </ContextFromPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export { ContextFromPlanets, Provider };
