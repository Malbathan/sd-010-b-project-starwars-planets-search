import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import TableContext from './TableContext';
import getPlanetsFromAPI from '../services';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState('');
  const [filterByName, setFilterByName] = useState('');
  const [filterByValue, setFilterByValue] = useState([]);

  const getPlanets = async () => {
    const result = await getPlanetsFromAPI();
    const data = await result;
    const { results } = data;
    setPlanets(results);
  };

  useEffect(() => {
    getPlanets();
  }, [filterByName]);

  const filters = {
    filterByName: {
      name: filterByName,
    },
    filterByValue,
  };

  const context = { planets, filters, setFilterByName, setFilterByValue };

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
