import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filtersColumns(handleChange, handleClick) {
  return (
    <>
      Filter by numeric Values
      <label htmlFor="column-filter">
        <select data-testid="column-filter" name="column" onChange={ handleChange }>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="numeric"
          data-testid="value-filter"
          name="value"
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Aplicar filtros
      </button>
    </>
  );
}

const CompareFilter = () => (
  <StarWarsContext.Consumer>
    {
      (({ handleChange, handleClick }) => filtersColumns(handleChange, handleClick))
    }
  </StarWarsContext.Consumer>
);

export default CompareFilter;
