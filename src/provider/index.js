import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DataContext from '../context';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [filtro, setFiltro] = useState({ filterByName: '' });

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const promise = await response.json();
      const result = promise.results[0];

      // Todo conteúdo do retorno da api no data
      setData(promise.results);

      // Somente as Keys para montar o cabeçalho
      setTable(Object.keys(result));
    }
    fetchApi();
  }, []);

  // Monta um objeto com as informação para enviar para o context
  const contextValue = { data, setData, table, filtro, setFiltro };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DataProvider;
