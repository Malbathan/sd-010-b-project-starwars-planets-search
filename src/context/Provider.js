import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWars';
/* import API from '../service/API'; */

const AuthProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState([]);
  const [aux1] = useState({ name: 'esio' });

  async function API() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const response = await fetch(url);
    const aux = await response.json();
    setData(aux.results);
  }

  useEffect(() => {
    API();
  }, []);

  const aux = {
    data,
    aux1,
  };

  return (
    <StarWarsContext.Provider value={ aux }>
      {children}
    </StarWarsContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
