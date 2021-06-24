import React, { useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await fetchAPI.json();
    setData(response.results);
  };

  return (
    <TableContext.Provider value={ { data, setData, getPlanets } }>
      { children }
    </TableContext.Provider>
  );
}

export default TableProvider;
