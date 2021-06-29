import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [filter, setFilterByName] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  async function getUser() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const { results } = await response.json();
    setData(results);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (filter.filterByName.name) {
      const filterName = data.filter(
        ({ name }) => name.toLowerCase().includes(filter.filterByName.name.toLowerCase()),
      );
      if (filterName.length > 0) {
        setPlanetsFilter(filterName);
      } else {
        setPlanetsFilter(data);
      }
    }
  }, [data, filter.filterByName.name]);

  const globalContext = {
    data,
    setFilterByName,
    filter,
    planetsFilter,
  };
  return (
    <PlanetContext.Provider value={ globalContext }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;
export default PlanetProvider;
