import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import requestAPI from '../services/requestAPI';
import TableContext from '../context/TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await requestAPI();
      planets.results.forEach((planet) => {
        delete planet.residents;
      });

      setData(planets.results);
      setTitles(Object.keys(planets.results[0]));
    };
    getPlanets();
  }, []);

  const myContext = { data, titles };

  return (
    <TableContext.Provider value={ myContext }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TableProvider;
