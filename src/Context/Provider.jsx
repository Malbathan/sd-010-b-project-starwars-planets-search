import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import fetchAPI from '../Services';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const getPlanetsData = async () => {
    const planetsData = await fetchAPI();
    setData(planetsData);
  };

  const filterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const filterByComparison = ({ column, comparison, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        }],
    });
    const index = columnOptions.indexOf(column);
    const noItemColumnFound = -1;
    if (index > noItemColumnFound) {
      columnOptions.splice(index, 1);
    }
    setColumnOptions(columnOptions);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const context = {
    data,
    filters,
    filterByName,
    filterByComparison,
    columnOptions,
  };

  return (
    <ApiContext.Provider value={ context }>
      {children}
    </ApiContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
