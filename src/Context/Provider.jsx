import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';
import fetchAPI from '../Services';
import { mappingHeaders, filteringAndMappingData }
  from '../Functions';

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

  const filterByName = ({ target: { value } }) => setFilters({
    ...filters,
    filterByName: {
      name: value,
    },
  });

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
    columnOptions.splice(index, 1);
    setColumnOptions(columnOptions);
  };

  const getPlanetsData = async () => {
    const planetsData = await fetchAPI();
    setData(planetsData);
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  const [planetsInfo, setPlanetsInfo] = useState();

  useEffect(() => {
    const planetHeaders = mappingHeaders(data);
    const filteredPlanets = filteringAndMappingData(data, filters);

    setPlanetsInfo({ planetHeaders, filteredPlanets });
  }, [data, filters, filters.filterByName.name, filters.filterByNumericValues]);

  const context = {
    data,
    filters,
    filterByName,
    filterByComparison,
    columnOptions,
    planetsInfo,
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
