import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [columnMap, setColumnMap] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  function exColumnMap() {
    setFilters(
      { ...filters,
        filterByNumericValues:
        [...filters.filterByNumericValues, { column, comparison, value }] },
    );
    setColumnMap(columnMap.filter((e) => e !== column));
  }

  return (
    <>
      <label htmlFor="planet-name">
        Planet Name
        <input
          type="text"
          id="planet-name"
          data-testid="name-filter"
          onChange={ ((e) => setFilters(
            { ...filters, filterByName: { name: e.target.value } },
          )) }
        />
      </label>
      <label htmlFor="option">
        <select
          name="column"
          data-testid="column-filter"
          onChange={ ((e) => setColumn(e.target.value)) }
        >
          {columnMap.map((e) => (<option key={ e } name="column">{e}</option>))}
        </select>
      </label>
      <label htmlFor="number">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ ((e) => setComparison(e.target.value)) }
        >
          <option name="comparison">maior que</option>
          <option name="comparison">menor que</option>
          <option name="comparison">igual a</option>
        </select>
      </label>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ ((e) => setValue(e.target.value)) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ exColumnMap }
      >
        Filtrar
      </button>
    </>
  );
}
