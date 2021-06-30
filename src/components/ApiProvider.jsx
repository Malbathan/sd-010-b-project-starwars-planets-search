/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function ApiProvider({ children }) {
  const [resultApi, setResultApi] = useState();
  const [resultFiltro, setResultFiltro] = useState();
  const [filters, setfilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    function comparisonFilter() {
      filters.filterByNumericValues.forEach((filtro) => {
        if (filtro.comparison === 'maior que') {
          const result = resultFiltro
            .filter((i) => i[filtro.column] > parseInt(filtro.value, 10));
          setResultFiltro(result);
        } else if (filtro.comparison === 'menor que') {
          const result = resultFiltro
            .filter((i) => i[filtro.column] < parseInt(filtro.value, 10));
          setResultFiltro(result);
        } else if (filtro.comparison === 'igual a') {
          const result = resultFiltro
            .filter((i) => i[filtro.column] === filtro.value);
          setResultFiltro(result);
        }
      });
    }
    if (resultApi) {
      const apiFiltrada = resultApi.filter((planet) => planet.name.toUpperCase()
        .includes(filters.filterByName.name.toUpperCase()));
      setResultFiltro(apiFiltrada);
    }
    if (filters.filterByNumericValues.length > 0) {
      comparisonFilter();
    }
  }, [filters, resultApi]);

  useEffect(() => {
    const getApi = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(endpoint).then((data) => data.json());
      setResultApi(response.results);
    };
    getApi();
  }, []);

  return (
    <MyContext.Provider value={ { setfilters, filters, resultFiltro } }>
      {children}
    </MyContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
