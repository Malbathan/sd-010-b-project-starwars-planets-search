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
    number: 0,
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

  // const handleColumn = ({ target: { name, value } }) => {
  //   setPlanetFilters({
  //     ...planetFilters,
  //     [name]: value,
  //   });
  // };

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
          number: localFilter.number,
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
