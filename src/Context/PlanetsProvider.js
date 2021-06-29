import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsApi from '../Services/PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await getPlanetsApi();
      setPlanets(results);
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

  return (
    <PlanetsContext.Provider value={ { data, filter, setFilter } }>
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
