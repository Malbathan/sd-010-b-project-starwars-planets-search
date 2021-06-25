import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import testData from '../testData';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByValue, setFilterByValue] = useState();

  useEffect(() => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const getPlanets = async () => {
      const planetsList = await fetch(PLANETS_URL)
        .then((res) => res.json())
        .then(({ results }) => results)
        .catch((err) => console.log(err));
      return planetsList
        ? setPlanets(planetsList)
        : setPlanets(testData.results);
    };

    getPlanets();
  });

  useEffect(() => {
    // console.log(filterByValue);
  }, [filterByValue]);

  const filters = {
    filterByName: {
      name: filterByName,
    },
    filterByValue,
  };

  const context = { planets, setFilterByName, setFilterByValue, filters };

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
