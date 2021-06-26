import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [arrFilter, setArrFilter] = useState([]);
  const [coluna, setColuna] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filter, setFilter] = useState({
    coluna: 'population',
    sinal: 'maior que',
    numero: '',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const results = await fetch(endpoint).then((planets) => planets.json());
      setData(results.results);
      setDataSearch(results.results);
    };
    getPlanets();
  }, []);

  const contextValue = {
    data,
    dataSearch,
    setDataSearch,
    filter,
    setFilter,
    arrFilter,
    setArrFilter,
    coluna,
    setColuna,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
