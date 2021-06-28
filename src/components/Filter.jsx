import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Select from './Select';

function Filter() {
  const { search, searchPlanetName } = useContext(PlanetsContext);
  const { filters: { filterByName: { name: searchText } } } = search;

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
        name="quantity-filter"
        testid="column-filter"
        dataOptions={ QUANTITY_FILTER }
      />
      <Select
        name="value-range"
        testid="comparison-filter"
        dataOptions={ VALUE_RANGE }
      />
    </section>
  );
}

export default Filter;
