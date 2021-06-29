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
    // setPlanets(getPlanetsApi().results);
  }, []);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
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
