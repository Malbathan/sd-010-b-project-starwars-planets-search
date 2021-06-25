import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState('');
  const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const getPlanetsFromAPI = async () => {
    const result = await fetch(API_URL);
    const data = await result.json();
    const { results } = data;
    setPlanets(results);
  };

  useEffect(() => {
    getPlanetsFromAPI();
  }, []);

  const context = { planets };

  return (
    <TableContext.Provider value={ context }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default TableProvider;
