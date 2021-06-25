import React, { useContext, useState } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

export default function FilterByValues() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <select
        name="filterByComparison"
        onChange={ handleComparison }
        data-testid="comparison-filter"
      >
        <option value="maior que">greater than</option>
        <option value="igual">equal to</option>
        <option value="menor que">lesser than</option>
      </select>
      <input type="number" name="values" onChange={ handleValues } />
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
