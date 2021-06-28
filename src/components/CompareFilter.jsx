import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filtersColumns(handleChange, handleNumericFilters) {
  const filterOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const filterComparison = [
    'maior que', 'menor que', 'igual a'];

  return (
    <>
      Filter by numeric Values
      <label htmlFor="column-filter">
        <select data-testid="column-filter" name="column" onChange={ handleChange }>
          {
            filterOptions.map((option, key) => <option key={ key }>{option}</option>)
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          {
            filterComparison.map((comparing, key) => (
              <option key={ key }>{comparing}</option>))
          }
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          min="0"
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => handleNumericFilters() }
      >
        Aplicar filtros
      </button>
    </>
  );
}

const CompareFilter = () => (
  <StarWarsContext.Consumer>
    {
      (({ handleChange, handleNumericFilters }) => (
        filtersColumns(handleChange, handleNumericFilters)))
    }
  </StarWarsContext.Consumer>
);

export default CompareFilter;
