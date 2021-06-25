import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsStarWars from '../services/fetchStarWars';

export const StarWarsContext = createContext({});

const objDefault = {
  filters:
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
};

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
  const [name, setName] = useState(objDefault);
  const [column, setColumn] = useState(objDefault);
  const [comparison, setComparison] = useState(objDefault);
  const [value, setValue] = useState(objDefault);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState(objDefaultFilters);

  async function getPlanets() {
    const data = await fetchPlanetsStarWars();
    setPlanetsStarWars(data);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { planetsStarWars,
        name,
        setName,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        isFiltered,
        setIsFiltered,
        filters,
        setFilters,
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
