import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/contexto';
import getPlanets from '../service/api';

export default function TableProv({ children }) {
  const [planets, setplanets] = useState([]);

  const planetAPI = async () => {
    const { results } = await getPlanets();
    results.forEach((result) => {
      delete result.residents;
    });
    setplanets(results);
  };

  useEffect(() => {
    planetAPI();
  }, []);

  const contextoGlobal = {
    // junta todos os useStates para jogar no value
    planets,
  };
  return (
    <TableContext.Provider value={ contextoGlobal }>
      {children}
    </TableContext.Provider>
  );
}

TableProv.propTypes = {
  children: PropTypes.func.isRequired,
};
