import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const FILTER_INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [infoHead, setInfoHead] = useState([]);
  const [filters, setFilters] = useState(FILTER_INITIAL_STATE);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const handleName = (search) => {
    const name = search;
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  function handleFilterClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  }

  useEffect(() => {
    const fetchStarWars = async () => {
      const request = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(request);
      const { results } = await response.json();
      setData(results);
      setInfoHead(Object.keys(results[0]));
    };
    fetchStarWars();
  }, []);

  const context = {
    data,
    infoHead,
    handleName,
    filters,
    setColumn,
    setComparison,
    setValue,
    handleFilterClick,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {
        children
      }

    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
