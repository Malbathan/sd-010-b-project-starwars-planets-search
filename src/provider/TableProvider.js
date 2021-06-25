import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/TableContext';
import fetchApi from '../services';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [namePlanet, setNamePlanet] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsResult = await fetchApi();
      setData(planetsResult);
    };
    fetchPlanets();
  }, []);

  const context = { data, setData, namePlanet, setNamePlanet };

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
