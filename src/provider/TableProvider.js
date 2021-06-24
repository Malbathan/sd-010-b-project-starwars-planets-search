import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/TableContext';
import fetchApi from '../services';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const planetsResult = await fetchApi();
      setData(planetsResult);
    }
    fetchPlanets();
  }, []);

  const context = { data, setData };

  return (
    <TableContext.Provider value={ context }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = ({
  children: PropTypes.func,
}).isRequired;

export default TableProvider;
