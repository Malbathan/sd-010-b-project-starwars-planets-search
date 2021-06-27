import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = async () => {
      const { results } = await (await fetch(endpoint)).json();
      results.forEach((result) => (
        delete result.residents
      ));
      setData(results);
      setLoading(!loading);
      const colNames = () => {
        const keysNames = Object.keys(results[0]);
        setKeys(keysNames);
      };
      colNames();
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      data.filter(
        (planet) => (
          planet.name.toLowerCase().includes(search.toLocaleLowerCase())
        ),
      ),
    );
  }, [search, data]);

  if (loading) {
    return <span>Loading Planets</span>;
  }

  const toConsume = {
    keys,
    setSearch,
    filteredPlanets,
  };

  return (

    <StarWarsContext.Provider value={ toConsume }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape({}),
};

StarWarsProvider.defaultProps = {
  children: {},
};

export default StarWarsProvider;
