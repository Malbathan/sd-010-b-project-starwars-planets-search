import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
// import testData from '../testData';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    getPlanets();
  }, []);
  
  const handleChange = ({ target }) => {
    setFilterText(target.value);
    console.log(data);
  };
  
  const filterPlanetsByName = {
    filters: {
      filterByName: {
        name: filterText,
      },
    },
  };

  const getPlanets = () => {
    // setData(testData.results);
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setData(results.results)));
  };

  const context = {
    data,
    getPlanets,
    filterPlanetsByName,
    handleChange,
  }

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
