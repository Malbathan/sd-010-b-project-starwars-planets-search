import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  // function handleChangeName(e) {
  //   setFilters({ ...filters, filterByName: { name: e.target.value } });
  // }

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
          <option name="column">population</option>
          <option name="column">orbital_period</option>
          <option name="column">diameter</option>
          <option name="column">rotation_period</option>
          <option name="column">surface_water</option>
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
        data-testid="button-filter'"
        onClick={ (() => setFilters(
          { ...filters, filterByNumericValues: [{ column, comparison, value }] },
        )) }
      >
        Filtrar
      </button>
    </>
  );
}
