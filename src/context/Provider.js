import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import planetsContext from './Context';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState('');
  const [planetsFilter, setPlanetsFilter] = useState('');
  const [inputPlanet, setInputPlanet] = useState({
    name: '',
    columns: '',
    comparison: '',
    numberValue: '',

  });
  const [inputOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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

  const optionsFilter = ({ target }) => {
    const { name, value } = target;
    if (name === 'column') {
      setInputPlanet({ ...inputPlanet, columns: value });
    } else if (name === 'comparsion') {
      setInputPlanet({ ...inputPlanet, comparison: value });
    } else {
      setInputPlanet({ ...inputPlanet, numberValue: value });
    }
  };

  const inputOptionsFilter = () => {
    const { columns, comparison, numberValue } = inputPlanet;
    const newColuns = planetsFilter.filter((planet) => {
      if (comparison === 'maior que') {
        return (parseInt(planet[columns], 10) > parseInt(numberValue, 10));
      }
      if (comparison === 'menor que') {
        return (parseInt(planet[columns], 10) < parseInt(numberValue, 10));
      }
      if (comparison === 'igual a') {
        return (parseInt(planet[columns], 10) === parseInt(numberValue, 10));
      }
      return planetsFilter;
    });
    setPlanetsFilter(newColuns);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const data = {
    planets,
    planetsFilter,
    filterName,
    inputOptions,
    optionsFilter,
    inputOptionsFilter,
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
