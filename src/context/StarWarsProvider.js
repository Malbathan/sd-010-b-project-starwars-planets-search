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
      if (filter.filterByName.name !== '') {
        setFilteredPlanet(data.filter(
          ({ name }) => name.toLowerCase().includes(filter.filterByName.name),
        ));
      } else {
        setFilteredPlanet(data);
      }
      filter.filterByNumericValues.map(({ column, comparison, value }) => {
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
        return console.log('teste');
      });
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

  const removeFilter = (coluna) => {
    let esseFiltro = filter.filterByNumericValues.find(({ column }) => column === coluna);
    esseFiltro = {};
    setFilter(esseFiltro);
    const pai = document.getElementById('pai');
    const essaLista = document.getElementById('lista');
    pai.removeChild(essaLista);
  };

  return (
    <StarWarsContext.Provider
      value={ { data,
        loading,
        filter,
        setFilter,
        filteredPlanet,
        removeFilter,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequires;

export default StarWarsProvider;
