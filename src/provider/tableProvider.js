import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/tableContext';
import starWarsApi from '../service/starWarsAPI';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const fetchStarWarsAPI = async () => {
      const { results } = await starWarsApi();
      results.forEach((result) => {
        delete result.residents;
      });
      setData(results);
    };
    fetchStarWarsAPI();
  }, []);

  const myContext = { data, setData, filters, setFilter };

  return (
    <TableContext.Provider value={ myContext }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = ({
  children: PropTypes.func.isRequired,
});

export default TableProvider;
