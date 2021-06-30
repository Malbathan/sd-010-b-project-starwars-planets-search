import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import testData from '../testData';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [planetFilters, setPlanetFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });

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

  const handleColumn = ({ target: { name, value } }) => {
    setPlanetFilters({
      ...planetFilters,
      [name]: value,
    });
  };

  const handleClick = ({ name, value }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const handleChange = ({ target }) => {
    setFilterText(target.value);
    console.log(data);
  };

  const filterPlanetsByName = {
    filters: {
      filterByName: {
        name: filterText,
      },
      filterByNumericValues: [
        {
          column: planetFilters.column,
          comparison: planetFilters.comparison,
          value: planetFilters.number,
        },
      ],
    },
  };

  const context = {
    data,
    filterPlanetsByName,
    getPlanets,
    handleChange,
    handleColumn,
    handleClick,
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
