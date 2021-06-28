import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsStarWars from '../services/fetchStarWars';

export const StarWarsContext = createContext({});

const objDefaultFilters = {
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
};

function StarWarsProvider({ children }) {
  const [planetsStarWars, setPlanetsStarWars] = useState([]);
  const [namePlanet, setNamePlanet] = useState('');
  const [columnFiltered, setColumnFiltered] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState(objDefaultFilters);
  const [isFiltered, setIsFiltered] = useState(false);

  async function getPlanets() {
    const data = await fetchPlanetsStarWars();
    setPlanetsStarWars(data);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        planetsStarWars,
        setPlanetsStarWars,
        setNamePlanet,
        namePlanet,
        setColumnFiltered,
        columnFiltered,
        setComparison,
        comparison,
        setValue,
        value,
        setFilter,
        filter,
        setIsFiltered,
        isFiltered,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
