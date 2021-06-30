import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPIPlanetsInfo from '../services/PlanetsListsAPI';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [isLoading, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {},
    },
  );

  // Ajuda do colega Dennis Marcelo para resolver requisicao e problemas com o Hook useEffect

  useEffect(() => {
    async function fetchPlanetsList() {
      setLoader(true);
      const planets = await getAPIPlanetsInfo();
      setData(planets);
      setLoader(false);
    }
    fetchPlanetsList();
  }, []);

  useEffect(() => {
    const { name } = filters.filterByName;
    const inputSearch = data.filter((info) => info.name.toLowerCase().includes(name));

    const selectSearch = data.filter((obj) => {
      if (filters.filterByNumericValues.length === 0) return data;
      const { column, comparison, value } = filters
        .filterByNumericValues[filters.filterByNumericValues.length - 1];
      switch (comparison) {
      case 'maior que':
        return Number(obj[column]) > Number(value);
      case 'menor que':
        return Number(obj[column]) < Number(value);
      case 'igual a':
        return Number(obj[column]) === Number(value);
      default:
        return data;
      }
    });

    const search = name.length === 0
      ? selectSearch
      : inputSearch;

    const negative = -1;

    const { order } = filters;
    if (order.sort === 'ASC' && order.column === 'name') {
      search.sort((a, b) => {
        if (b.name < a.name) return negative;
        if (b.name > a.name) return 1;
        return 0;
      });
    } else {
      search.sort((a, b) => {
        if (a.name < b.name) return negative;
        if (a.name > b.name) return 1;
        return 0;
      });
    }

    if (order.sort === 'ASC') {
      search.sort((a, b) => a[order.column] - b[order.column]);
    } else {
      search.sort((a, b) => b[order.column] - a[order.column]);
    }

    setFiltered(search);
  }, [filters, data]);

  function handleNameFilter({ target: { value } }) {
    setFilter({ ...filters, filterByName: { name: value } });
  }

  function filterByValues(filtersState) {
    // setFilter({ ...filters,
    //   filterByNumericValues:
    //   [...filters.filterByNumericValues, filtersLocalState],
    // });

    setFilter((prevState) => ({
      ...filters,
      filterByNumericValues:
      prevState.filterByNumericValues.concat([filtersState]),
    }));
  }

  function handleSortClick(sortState) {
    setFilter({ ...filters, order: sortState });
  }

  // PropTypes pesquisado em: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

  return (
    <StarWarsContext.Provider
      value={ {
        isLoading,
        data,
        handleNameFilter,
        filterByValues,
        setFilter,
        filtered,
        filters,
        handleSortClick,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
