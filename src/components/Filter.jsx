import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';

function Filter({ filterByNumber, categories }) {
  const { search, searchPlanetName, searchByNumericValues } = useContext(PlanetsContext);
  const {
    filters: {
      filterByName: { name: searchText },
      filterByNumericValues: { value: quantity },
    } } = search;

  const VALUE_RANGE = [
    'maior que', 'menor que', 'igual a',
  ];

  return (
    <section>
      <input
        value={ searchText }
        onChange={ searchPlanetName }
        placeholder="Search a planet"
        data-testid="name-filter"
      />
      <br />
      <Select
        name="column"
        testid="column-filter"
        dataOptions={ categories }
        onChange={ searchByNumericValues }
      />
      <Select
        name="comparison"
        testid="comparison-filter"
        dataOptions={ VALUE_RANGE }
        onChange={ searchByNumericValues }
      />
      <input
        value={ quantity }
        type="number"
        name="value"
        onChange={ searchByNumericValues }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ filterByNumber }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </section>
  );
}

Filter.propTypes = {
  filterByNumber: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
