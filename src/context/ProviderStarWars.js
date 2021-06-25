import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [data, setData] = useState([]);
  const [dataFilted, setDataFilted] = useState([]);
  const [filters, setfilters] = useState({
    filterByName: { name: '' },
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
    setDataFilted(data.filter(({ name }) => name.includes(filters.filterByName.name)));
  }, [data, filters]);

  const functionSetFilters = (filter, name) => {
    console.log(name);
    setfilters({
      ...filters,
      [filter]: { name },
    });
  };

  const context = {
    data,
    setData,
    filters,
    functionSetFilters,
    dataFilted,
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
