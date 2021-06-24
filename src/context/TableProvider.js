import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import TableContext from './TableContext';
import getPlanetsFromAPI from '../services';

function TableProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const results = await getPlanetsFromAPI();
      console.log(results);
      // setPlanets({
      //   results,
      // });
    };
    getPlanets();
  });

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
