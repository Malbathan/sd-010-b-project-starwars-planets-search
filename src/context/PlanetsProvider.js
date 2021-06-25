import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

import fetchPlanets from '../services/fetchPlanetsAPI';
import { dataInitialState, filtersInitialState } from '../services/providerInitialState';

function PlanetsProvider({ children }) {
  const [data, setData] = useState(dataInitialState);
  const [filters, setFilters] = useState(filtersInitialState);
  const [planets, setPlanets] = useState([]);

  const changeNameToFilter = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  };

  const createNumericFilter = (filter) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  };

  const filterPlanetByName = () => {
    const nameToFilter = filters.filterByName.name;
    setData(planets.filter((planet) => planet.name.includes(nameToFilter)));
  };

  const filterPlanetByNumbers = (planet, filter) => {
    const planetValue = parseInt(planet[filter.column], 10);
    const comparisonOperator = filter.comparison;
    const valueToCompare = parseInt(filter.value, 10);

    switch (comparisonOperator) {
    case ('maior que'): {
      return planetValue > valueToCompare;
    }
    case ('menor que'): {
      return planetValue < valueToCompare;
    }
    case ('igual a'): {
      return planetValue === valueToCompare;
    }
    default: return false;
    }
  };

  const executeEachNumericFilter = () => {
    if (filters.filterByNumericValues.length > 0) {
      filters.filterByNumericValues.forEach((numericFilter) => {
        setData(
          data.filter((planet) => (filterPlanetByNumbers(planet, numericFilter))),
        );
      });
    }
  };

  const getPlanets = async () => {
    const fetchedPlanets = await fetchPlanets();
    setData(fetchedPlanets);
    setPlanets(fetchedPlanets);
  };

  // ComponentDidUpdate
  useEffect(() => {
    filterPlanetByName();
    executeEachNumericFilter();
  }, [filters]);

  useEffect(() => {
    // console.log(data);
  }, [data]);

  // ComponentDidMount
  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    data,
    filters,
    planets,
    changeNameToFilter,
    createNumericFilter,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
