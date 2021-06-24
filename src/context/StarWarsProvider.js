import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsData from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filters, setFilters] = useState({
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
  });

  const getPlanets = async () => {
    const { results } = await planetsData();
    setPlanets(results);
  };

  useEffect(() => {
    if (filters.filterByName.name === '') getPlanets();
    else {
      const filteredPlanets = planets
        .filter(({ name }) => name.toLowerCase().includes(filters.filterByName.name));
      setPlanets(filteredPlanets);
      // console.log(filteredPlanets);
    }
  }, [filters]);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        filters,
        setFilterByName,
        setFilters,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
