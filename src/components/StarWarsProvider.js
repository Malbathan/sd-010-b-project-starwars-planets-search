import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [responseAPI, setResponseAPI] = useState([]);

  const fetchAPI = async () => {
    // const apiStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
    fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
      .then((response) => response.json())
      .then((resp) => setResponseAPI(resp.results));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const stateGlobal = {
    fetchAPI,
    responseAPI,
  };

  return (
    <div>
      <StarWarsContext.Provider value={ stateGlobal }>
        {children}
      </StarWarsContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
