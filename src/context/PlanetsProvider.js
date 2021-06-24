import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      const planetsList = await fetch(PLANETS_URL)
        .then((res) => res
          .json()
          .then((json) => (res.ok
            ? Promise.resolve(json.results)
            : Promise.reject(json))));
      setPlanets(planetsList);
    };

    getPlanets();
  }, []);

  const context = { planets };

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
