import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsData from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [TableThs, setTableThs] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const getPlanets = async () => {
    const { results } = await planetsData();
    setPlanets(results);
    setTableThs(Object.keys(results[0]).filter((e) => e !== 'residents'));
    console.log(results);
  };

  useEffect(() => {
    if (!filters.filterByName.name) getPlanets();
    else {
      const filteredPlanets = planets
        .filter(({ name }) => name.toLowerCase().includes(filters.filterByName.name));
      setPlanets(filteredPlanets);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByName]);

  const filterNumMore = (c, v) => planets.filter((p) => Number(p[c]) > Number(v));
  const filterNumLess = (c, v) => planets.filter((p) => Number(p[c]) < Number(v));
  const filterNumequal = (c, v) => planets.filter((p) => Number(p[c]) === Number(v));

  useEffect(() => {
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') setPlanets(filterNumMore(column, value));
      if (comparison === 'menor que') setPlanets(filterNumLess(column, value));
      if (comparison === 'igual a') setPlanets(filterNumequal(column, value));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        filters,
        TableThs,
        setFilters,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
