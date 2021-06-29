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
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '-1',
      },
    ],
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
    const { column, comparison, value } = filterText.filterByNumericValues;
    let filteredPlanets = planets;
    switch (comparison) {
    case 'maior que':
      filteredPlanets = planetsFilter.filter((planet) => console.log(planet));

      break;
    case 'menor que':

      break;
    case 'igual a':

      break;

    default:
      break;
    }

    console.log(planets);
    if (name !== '') {
      console.log(column, comparison, value);
      filteredPlanets = planets.filter((planet) => planet.name
        .toLowerCase()
        .includes(name));
    }
    setplanetsFilter(filteredPlanets);
  }, [filterText, planets, planetsFilter]);

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
