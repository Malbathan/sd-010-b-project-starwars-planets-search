import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ContextTabela from '../context/ContextTabela';

function ProviderTabela({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(urlApi).then((res) => res.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <ContextTabela.Provider value={ { data } }>
      { children }
    </ContextTabela.Provider>
  );
}

ProviderTabela.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProviderTabela;
