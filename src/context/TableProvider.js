import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import TableContext from './TableContext';
import getPlanetsFromAPI from '../services';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: 'Tatoo',
    },
  });

  const getPlanets = async () => {
    const result = await getPlanetsFromAPI();
    const data = await result;
    const { results } = data;
    setPlanets(results);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = { planets, filters, setFilters };

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
