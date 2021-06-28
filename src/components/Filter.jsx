import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';

function Filter() {
  const { search, searchPlanetName, searchByNumericValues } = useContext(PlanetsContext);
  const {
    filters: {
      filterByName: { name: searchText },
      filterByNumericValues: { value: quantity },
    } } = search;

  const QUANTITY_FILTER = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

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
        dataOptions={ QUANTITY_FILTER }
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
        placeholder="Search a planet"
        data-testid="name-filter"
      />
    </section>
  );
}

export default Filter;
