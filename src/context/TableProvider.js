import React from 'react';
import Proptypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  return (
    <TableContext.Provider>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default TableProvider;
