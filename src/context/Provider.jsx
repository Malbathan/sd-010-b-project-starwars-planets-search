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

  function getFilter({ target: { value } }) {
    if (filter.filterByName.name === '') {
      setPlanetsFilter(data);
    } else {
      setFilterByName({ ...filter, filterByName: { name: value } });
      console.log(filter.filterByName.name);
    }
  }

  const globalContext = {
    planetsFilter,
    getFilter,
    filter,
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
