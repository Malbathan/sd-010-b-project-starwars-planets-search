import React, { userState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [planets, setPlanets] = userState();
  context = { planets, setPlanets };
  return (
    <TableContext.Provider value={ context }>
      { children }
    </TableContext.Provider>
  );
}

export default TableProvider;
