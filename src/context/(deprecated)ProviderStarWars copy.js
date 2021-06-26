// O código abaixo funciona e é muito útil, porem o teste pede algo mais simples
// Ele possibilita criar novos filtros sem prejudicar os antigos e tbm possibilita
// atualizar filtros antigos sem prejudicar os demais.
/* import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';
import helperFilter from '../helpers/helpFilter';

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [dataFilted, setDataFilted] = useState([]);
  const [filters, setfilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      { column: 'population', comparison: '', value: '' },
    ],
  });

  useEffect(() => {
    async function featchPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const objResponse = await fetch(url).then((results) => results.json());
      const arrayPlanets = objResponse.results.map((obj) => {
        delete obj.residents;
        return obj;
      });
      setData(arrayPlanets);
    }

    featchPlanets();
  }, [setData]);

  useEffect(() => {
    const filted = data.filter(
      (objPlanet) => {
        // filtes
        const arraTruOrFalse = [];
        filters.filterByNumericValues.forEach((objFilter) => {
          arraTruOrFalse.push(helperFilter(objFilter, objPlanet));
        });

        const nameIsTrue = objPlanet.name.includes(filters.filterByName.name);
        const allArrayIsTrue = arraTruOrFalse.every((ele) => ele === true);

        // condicional
        if (nameIsTrue && allArrayIsTrue) {
          return true;
        }
        return false;
      },
    );

    setDataFilted(filted);
  }, [data, filters]);

  const addNameFilter = (filter, name) => {
    setfilters({
      ...filters,
      [filter]: { name },
    });
  };

  const addSelectFilter = (objFilter) => {
    const newArray = [...filters.filterByNumericValues];
    let newNewArray = [];
    const istrue = newArray.some(({ column }) => column === objFilter.column);

    if (istrue) {
      newNewArray = newArray.map(
        (afterFilter) => (
          afterFilter.column === objFilter.column ? objFilter : afterFilter
        ),
      );

      setfilters({
        ...filters,
        filterByNumericValues: [objFilter],
      });
    } else {
      setfilters({
        ...filters,
        filterByNumericValues: [...newArray, objFilter],
      });
    }
  };
  const context = {
    data,
    setData,
    filters,
    addNameFilter,
    dataFilted,
    addSelectFilter,
  };

  return (
    <ContextStarWars.Provider value={ context }>
      {children}
    </ContextStarWars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default ProviderStarWars;
 */
