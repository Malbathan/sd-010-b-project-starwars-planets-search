import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import testData from '../testData';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState({ filters: { filterByName: { name: '' } } });

  const searchOnChange = ({ target: { value } }) => {
    setSearch({
      ...search,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  const fetchPlanets = async () => {
    // setLoading(true);
    // const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    // const planetsJson = await response.json();
    const planets = testData.results; // planetsJson.results
    planets.forEach((planet) => delete planet.residents);

    // setLoading(false);
    setData(planets);
  };

  useEffect(() => {
    const getPlanets = async () => {
      await fetchPlanets();
    };

    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, loading, search, searchOnChange, setData } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
