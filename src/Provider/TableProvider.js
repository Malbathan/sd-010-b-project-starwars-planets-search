import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import tabbleContext from '../context/SWcontext';
import starwarsAPI from '../services/SWApi';

// recebi o auxilio do colega Eder Paiva para a resolução do requisito 1
function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [colunas, setColunas] = useState([]);
  const [loading, setLoading] = useState([false]);

  const fetchSW = async () => {
    setLoading(true);
    const response = await starwarsAPI();
    response.results.forEach((res) => delete res.residents);
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
