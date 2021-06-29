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
    setFiltered(inputSearch);

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
    setFiltered(search);
  }, [filters, data]);

  const handleNameFilter = ({ target }) => {
    const { value } = target;
    setFilter({ ...filters, filterByName: { name: value } });
  };

  const filterByValues = ({ column, comparison, value }) => {
    // setFilter({ ...filters,
    //   filterByNumericValues:
    //   [...filters.filterByNumericValues, { column, comparison, value }],
    // });

    setFilter((prevState) => ({
      ...filters,
      filterByNumericValues:
      prevState.filterByNumericValues.concat([{ column, comparison, value }]),
    }));
  };

  // PropTypes pesquisado em: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

  StarWarsProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

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
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}
