import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';
import helperFilter from '../helpers/helpFilter';

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [dataFilted, setDataFilted] = useState([]);
  const [filters, setfilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
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
        const nameIsTrue = objPlanet.name.includes(filters.filterByName.name);
        const comparedColumn = helperFilter(filters.filterByNumericValues[0], objPlanet);

        // condicional
        if (nameIsTrue && comparedColumn) {
          return true;
        }
        return false;
      },
    );

    setDataFilted(filted);
  }, [data, filters]);

  const addNameFilter = (filter, name) => {
    console.log(name);
    setfilters({
      ...filters,
      [filter]: { name },
    });
  };

  const addSelectFilter = (obj) => {
    console.log(obj);
    setfilters({
      ...filters,
      filterByNumericValues: [obj],
    });
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
