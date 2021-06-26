import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';
import helperFilter from '../helpers/helpFilter';

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [dataFilted, setDataFilted] = useState([]);
  const [listFilter, setListFilter] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
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
    const newArrayFilter = listFilter.filter((filter) => filter !== objFilter.column);
    setListFilter(newArrayFilter);
    setfilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, objFilter],
    });
  };

  const context = {
    data,
    setData,
    filters,
    addNameFilter,
    dataFilted,
    addSelectFilter,
    listFilter,
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
