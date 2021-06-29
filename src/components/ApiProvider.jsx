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
      const { comparison, column, value } = filters.filterByNumericValues[0];
      if (comparison === 'maior que') {
        const result = resultApi.filter((i) => i[column] > parseInt(value, 10));
        setResultFiltro(result);
      } else if (comparison === 'menor que') {
        const result = resultApi.filter((i) => i[column] < parseInt(value, 10));
        setResultFiltro(result);
      } else if (comparison === 'igual a') {
        const result = resultApi.filter((i) => i[column] === value);
        setResultFiltro(result);
      }
    }
    if (resultApi) {
      const apiFiltrada = resultApi.filter((planet) => planet.name.toUpperCase()
        .includes(filters.filterByName.name.toUpperCase()));
      setResultFiltro(apiFiltrada);
    }
    if (resultApi && filters.filterByNumericValues.length > 0) {
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
      { children }
    </MyContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
