import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsApi from '../Services/PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  const [dataFiltered, setDataFiltered] = useState(data);
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await getPlanetsApi();
      setPlanets(results);
      setDataFiltered(results);
    };
    getPlanets();
  }, []);

  const [filter, setFilter] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: 'population',
            comparison: 'maior que',
            value: '0',
          },
        ],
      },
  });

  const clickSelectorFilter = () => {
    const { column, comparison, value } = filter.filters.filterByNumericValues[0];
    const dataFilter = data.filter((planet) => {
      if (comparison === 'maior que') {
        return (planet[column] > parseInt(value, 10));
      }
      if (comparison === 'menor que') {
        return (planet[column] < parseInt(value, 10));
      }
      if (comparison === 'igual a') {
        return (planet[column] === parseInt(value, 10));
      }
      return false;
    });
    setDataFiltered(dataFilter);
    console.log(dataFilter);
  };

  return (
    <PlanetsContext.Provider
      value={ { dataFiltered, filter, setFilter, clickSelectorFilter } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
