import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

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

  function handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setNumericFilters((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  }

  function handleClick() {
    const { column, comparison, value } = numericFilters;
    if (comparison === 'maior que') {
      console.log('oi');
      return setFilteredPlanets(data.filter((planet) => planet[column] > value));
    }
    if (comparison === 'menor que') {
      return setFilteredPlanets(data.filter((planet) => planet[column] < value));
    }
    if (comparison === 'igual a') {
      return setFilteredPlanets(data.filter((planet) => planet[column] === value));
    }
  }

  function clearFilters() {
    setFilteredPlanets(data);
  }

  if (loading) {
    return <span>Loading Planets...</span>;
  }

  const toConsume = {
    filteredPlanets,
    keys,
    setSearch,
    handleChange,
    handleClick,
    clearFilters,
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
  children: undefined,
};

export default StarWarsProvider;
