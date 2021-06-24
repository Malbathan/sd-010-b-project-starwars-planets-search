import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      const planetsList = await fetch(PLANETS_URL)
        .then((res) => res.json())
        .then(({ results }) => results)
        .catch((err) => console.log(err));
      setPlanets(planetsList);
    };

    getPlanets();
  });

  const filters = {
    filterByName: {
      name: filterByName,
    },
  };

  const context = { planets, setFilterByName, filters };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
