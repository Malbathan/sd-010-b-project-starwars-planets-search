import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [textFilter, setTextFilter] = useState('');

  // didMount
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((resp) => resp.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const handleChangeText = ({ target: { value } }) => {
    setTextFilter(value);
  };

  // filter data by name
  useEffect(() => {
    if (textFilter) {
      const filterByName = data.filter(
        ({ name }) => name.toLowerCase().includes(textFilter.toLowerCase()),
      );
      if (filterByName.length > 0) {
        setFilteredByName(filterByName);
      } else {
        setFilteredByName(data);
      }
    }
  }, [data, textFilter]);

  const globalContext = {
    data,
    textFilter,
    filteredByName,
    handleChangeText,
  };

  return (
    <PlanetsContext.Provider value={ globalContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;
export default PlanetsProvider;
