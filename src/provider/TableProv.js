import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/contexto';
import getPlanets from '../service/api';

export default function TableProv({ children }) {
  const [planets, setplanets] = useState([]);
  const [planetsFilter, setplanetsFilter] = useState([]);
  const [filterText, setfilterText] = useState({
    filterByName: {
      name: '',
    },
  });

  const planetAPI = async () => {
    const { results } = await getPlanets();
    results.forEach((result) => {
      delete result.residents;
    });
    setplanets(results);
  };

  useEffect(() => {
    const { name } = filterText.filterByName;
    if (name !== '') {
      const filteredPlanets = planets.filter((planet) => planet.name
        .toLowerCase()
        .includes(name));
      setplanetsFilter(filteredPlanets);
    } else {
      setplanetsFilter(planets);
    }
  }, [filterText, planets]);

  useEffect(() => {
    planetAPI();
  }, []);

  // junta todos os useStates para jogar no value
  const contextoGlobal = { planetsFilter, filterText, setfilterText };
  return (
    <TableContext.Provider value={ contextoGlobal }>
      {children}
    </TableContext.Provider>
  );
}

TableProv.propTypes = {
  children: PropTypes.func.isRequired,
};
