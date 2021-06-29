import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import LoadScreen from '../components/LoadScreen';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [colHeaders, setColHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState('');
  const [filterOptions, setFilterOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
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
      setLoading(false);
      const colNames = () => {
        const keysName = Object.keys(results[0]);
        setColHeaders(keysName);
      };
      colNames();
    };
    fetchPlanets();
  }, [loading]);

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

  function handleNumericFilters() {
    const { column, comparison, value } = numericFilters;

    const GreaterThan = (planet) => planet[column] > parseInt(value, 10);
    const LessThan = (planet) => planet[column] < parseInt(value, 10);
    const EqualsThan = (planet) => planet[column] === value;

    const comparing = {
      'maior que': () => setFilteredPlanets(data.filter(GreaterThan)),
      'menor que': () => setFilteredPlanets(data.filter(LessThan)),
      'igual a': () => setFilteredPlanets(data.filter(EqualsThan)),
    };

    setFilterOptions(
      filterOptions.filter((option) => option !== column),
    );

    return comparing[comparison]();
  }

  function clearFilters() {
    setFilteredPlanets(data);
  }

  if (loading) {
    return <LoadScreen />;
  }

  const toConsume = {
    filteredPlanets,
    colHeaders,
    setSearch,
    filterOptions,
    handleChange,
    handleNumericFilters,
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
