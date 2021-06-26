import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPIPlanetsInfo from '../services/PlanetsListsAPI';

import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [isLoading, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
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
    const inputSearch = data
      .filter((info) => info.name.toLowerCase().includes(filter.filterByName.name));
    // const btnSearch = data.filter()

    setFiltered(inputSearch);
  }, [filter, data]);

  const handleNameFilter = ({ target }) => {
    const { value } = target;
    setFilter({ ...filter, filterByName: { name: value } });
  };

  const filterByNumericValues = (column, comparison, value) => {
    setFilter({ ...filter,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
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
        filterByNumericValues,
        filtered,
        filter,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}
