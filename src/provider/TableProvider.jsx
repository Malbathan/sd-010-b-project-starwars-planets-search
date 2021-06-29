import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import requestAPI from '../services/requestAPI';
import TableContext from '../context/TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  // const [filterName, setFilterName] = useState([]);
  // mudei esse estado para filters pois estava fazendo diferente do que pede no readme.
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValue: [],
  });
  const [update, setUptade] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await requestAPI();
      planets.results.forEach((planet) => {
        delete planet.residents;
      });

      setData(planets.results);
      setTitles(Object.keys(planets.results[0]));
    };
    getPlanets();
  }, []);

  // handleChange input planet name
  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    // setFilterName(value);
  };

  const filteredPlanets = useCallback(() => {
    console.log(filters);
    const { column, comparison, value } = filters.filterByNumericValue[0];
    console.log('entoru');

    const filterInAPI = data.filter((element) => {
      if (comparison === 'maior que') {
        return Number(element[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(element[column]) < Number(value);
      }
      return Number(element[column]) === Number(value);
    });
    setData(filterInAPI);
  }, [data, filters]);

  useEffect(() => {
    if (update === true) {
      filteredPlanets();
    }
    setUptade(false);
  }, [filteredPlanets, update]);

  const handleClick = (state) => {
    setFilters(
      { ...filters, filterByNumericValue: [...filters.filterByNumericValue, state] },
    );
    setUptade(true);
  };

  const myContext = {
    data,
    titles,
    filters,
    handleChange,
    handleClick,
  };

  return (
    <TableContext.Provider value={ myContext }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TableProvider;
