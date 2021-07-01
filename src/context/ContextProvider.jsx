import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataFilteredByName, setDataFilteredByName] = useState([]);
  const [dataFilteredBySelects, setDataFilteredBySelects] = useState([]);
  const [filterByNumeric, setFilterByNumeric] = useState({
    column: '',
    condition: '',
    numberSelect: 0,
  });

  const fetchAPI = () => {
    const URL_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(URL_ENDPOINT)
      .then((response) => response.json()
        .then((dataAPI) => setData(dataAPI.results)));
  };

  const context = {
    data,
    setData,
    dataFilteredByName,
    setDataFilteredByName,
    filterByNumeric,
    setFilterByNumeric,
    dataFilteredBySelects,
    setDataFilteredBySelects,
    fetchAPI,
  };

  return (
    <PlanetContext.Provider
      value={ context }
    >
      {children}
    </PlanetContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
