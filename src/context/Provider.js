import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import planetsContext from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState('');
  const [planetsFilter, setPlanetsFilter] = useState('');
  const [inputPlanet, setInputPlanet] = useState({
    name: '',
  });
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanets() {
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    setPlanets(results);
    setPlanetsFilter(results);
  }

  const filterName = ({ target }) => {
    const { value } = target;
    setInputPlanet({ ...inputPlanet, name: value });
    const filteredPlanets = planets.filter((planet) => planet.name.includes(value));
    setPlanetsFilter(filteredPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const data = {
    planets,
    planetsFilter,
    filterName,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default Provider;
