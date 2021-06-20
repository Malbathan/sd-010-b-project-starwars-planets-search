import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState();

  const fetchPlanets = async () => {
    try {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then(
        (resp) => resp.json(),
      );
      results.forEach((planet) => {
        delete planet.residents;
      });
      setData(results);
    } catch (error) {
      console.log('Ocorreu um erro na requisição à API.');
    }
  };

  const providerContext = { data, fetchPlanets };

  return (
    <PlanetsContext.Provider value={ providerContext }>
      {children}
    </PlanetsContext.Provider>);
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
