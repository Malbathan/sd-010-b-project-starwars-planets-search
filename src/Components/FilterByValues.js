import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

export default function FilterByValues() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState(0);
  const { filters, setFilters } = useContext(StarWarsContext);

  const sendFilterByValue = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [{ column, comparison, value: values }] });
  };

  const handleColumn = (event) => {
    const { value } = event.target;
    setColumn(value);
  };
  const handleComparison = (event) => {
    const { value } = event.target;
    setComparison(value);
  };

  const handleValues = (event) => {
    const { value } = event.target;
    setValues(value);
  };

  return (
    <form onSubmit={ sendFilterByValue }>
      <label htmlFor="filterByValues">
        Filter by Column
        {' '}
        <select
          name="filterByValues"
          onChange={ handleColumn }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <select
        name="filterByComparison"
        onChange={ handleComparison }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="values"
        onChange={ handleValues }
        data-testid="value-filter"
      />
      <button
        type="submit"
        onClick={ sendFilterByValue }
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}
