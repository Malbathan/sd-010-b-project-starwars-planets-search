import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import testData from '../testData';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');

  const initialState = {
    column: 'population',
    comparison: 'maior que',
    value: '',
  };
  const [localFilter, setLocalFilter] = useState(initialState);

  const getPlanets = () => {
    // setData(testData.results);
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setData(results.results)));
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const handleChange = ({ target }) => {
    setFilterText(target.value);
  };

  const filterPlanetsByName = {
    filters: {
      filterByName: {
        name: filterText,
      },
      filterByNumericValues: [
        {
          column: localFilter.column,
          comparison: localFilter.comparison,
          value: localFilter.value,
        },
      ],
    },
  };

  const context = {
    data,
    localFilter,
    filterPlanetsByName,
    setLocalFilter,
    getPlanets,
    handleChange,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
