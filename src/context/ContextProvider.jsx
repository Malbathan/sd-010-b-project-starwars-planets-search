import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchAPI = () => {
    const URL_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(URL_ENDPOINT)
      .then((response) => response.json()
        .then((dataAPI) => setData(dataAPI.results)));
  };

  return (
    <PlanetContext.Provider value={ { data, setData, fetchAPI } }>
      {children}
    </PlanetContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
