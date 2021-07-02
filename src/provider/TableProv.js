import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from '../context/contexto';
import getPlanets from '../service/api';

export default function TableProv({ children }) {
  const [planets, setplanets] = useState([]);
  const [planetsFilter, setplanetsFilter] = useState([]);
  const [filterText, setfilterText] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  // console.log(filterText, 'filters');

  const planetAPI = async () => {
    const { results } = await getPlanets();
    results.forEach((result) => {
      delete result.residents;
    });
    setplanets(results);
  };

  const compara = {
    'maior que': (pValue, fValue) => pValue > fValue,
    'menor que': (pValue, fValue) => pValue < fValue,
    'igual a': (pValue, fValue) => pValue === fValue,
  };

  useEffect(() => {
    const { filterByName, filterByNumericValues } = filterText.filters;
    const { name } = filterByName;

    function teste(fBNValues) {
      const plan = planets.filter((planet) => fBNValues
        .every((filters) => compara[filters.comparison](planet[filters
          .column], filters.value)));
      console.log(fBNValues, plan, 'teste');
      return plan;
    }
    let filteredPlanets = teste(filterByNumericValues);
    if (name !== '') {
      filteredPlanets = filteredPlanets.filter((planet) => planet.name
        .toLowerCase()
        .includes(name));
    }

    setplanetsFilter(filteredPlanets);
  }, [compara, filterText, planets]);

  useEffect(() => {
    planetAPI();
  }, []);

  // junta todos os useStates para jogar no value
  const contextoGlobal = {
    planetsFilter,
    filterText,
    setfilterText,
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
