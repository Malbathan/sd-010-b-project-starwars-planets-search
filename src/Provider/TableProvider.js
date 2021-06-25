import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tabbleContext from '../context/SWcontext';
import starwarsAPI from '../services/SWApi';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [colunas, setColunas] = useState([]);
  const [loading, setLoading] = useState([false]);

  const fetchSW = async () => {
    setLoading(true);
    const response = await starwarsAPI();
    response.results.forEach((planet) => delete planet.residents);
    setData(response);
    setColunas(Object.keys(response.results[0]));
    setLoading(false);
  };

  useEffect(() => {
    fetchSW();
  }, []);

  const context = { data, setData, colunas, setColunas, loading };

  return (
    <tabbleContext.Provider value={ context }>
      {children}
    </tabbleContext.Provider>
  );
}

TableProvider.propTypes = ({
  children: PropTypes.func.isRequired,
});

export default TableProvider;
