import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

import fetchPlanets, { urlArray } from '../services/Api';

function StarWarsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      },
    ],
  });
  const [filteredPlanet, setFilteredPlanet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planets = await fetchPlanets(urlArray[0]);
      setData(planets.results);
      setLoading(true);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filterPlanets = () => {
      const { column, comparison, value } = filter.filterByNumericValues[0];
      if (filter.filterByName.name !== '') {
        setFilteredPlanet(data.filter(
          ({ name }) => name.toLowerCase().includes(filter.filterByName.name),
        ));
      } else {
        setFilteredPlanet(data);
      }
      if (value !== '') {
        if (comparison === 'maior que') {
          return setFilteredPlanet(data.filter(
            (planet) => parseFloat(planet[column]) > parseFloat(value),
          ));
        }
        if (comparison === 'igual a') {
          return setFilteredPlanet(data.filter(
            (planet) => parseFloat(planet[column]) === parseFloat(value),
          ));
        }
        if (comparison === 'menor que') {
          return setFilteredPlanet(data.filter(
            (planet) => parseFloat(planet[column]) < parseFloat(value),
          ));
        }
      }
    };
    filterPlanets();
  }, [data, filter]);

  // useEffect(() => {
  //   async function fetchData() {
  //     urlArray.map(async (url) => {
  //       const planets = [];
  //       planets.push(await fetchPlanets(url));
  //       setData(planets.results);
  //     });
  //     setLoading(true);
  //   }
  //   fetchData();
  // }, []);
  //

  return (
    <StarWarsContext.Provider
      value={ { data,
        loading,
        filter,
        setFilter,
        filteredPlanet } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequires;

export default StarWarsProvider;
