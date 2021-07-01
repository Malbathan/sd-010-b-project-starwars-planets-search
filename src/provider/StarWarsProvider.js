import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getAPI from '../service/api';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });
  const [filterAll, setFilterAll] = useState([]);

  const context = {
    data, setData, loading, setLoading, filters, setFilters, filterAll, setFilterAll,
  };

  useEffect(() => {
    async function fetchApi() {
      const planets = await getAPI();
      planets.map((planet) => delete planet.residents);
      setData(planets);
      setLoading(true);
    }
    fetchApi();
  }, []);

  useEffect(() => {
    const filterName = data.filter((e) => e.name.includes(filters.filterByName.name));
    const filterNumber = data.filter((el) => {
      if (filters.filterByNumericValues.length === 0) {
        return data;
      }
      const { column, comparison, value } = filters
        .filterByNumericValues[filters.filterByNumericValues.length - 1];
      switch (comparison) {
      case 'maior que':
        return Number(el[column]) > Number(value);
      case 'menor que':
        return Number(el[column]) < Number(value);
      case 'igual a':
        return Number(el[column]) === Number(value);
      default:
        return data;
      }
    });
    const situation = filters.filterByName.name.length === 0 ? filterNumber : filterName;
    setFilterAll(situation);
  }, [data, filters]);

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
