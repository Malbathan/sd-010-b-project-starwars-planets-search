import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filtersColumns(handleChange, handleClick) {
  return (
    <>
      Filter by numeric Values
      <label htmlFor="column-filter">
        <select select="column-filter" name="column" onChange={ handleChange }>
          <option>Population</option>
          <option>Orbital Period</option>
          <option>Diameter</option>
          <option>Rotation Period</option>
          <option>Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select select="comparison-filter" data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
          <option>Maior que</option>
          <option>Menor que</option>
          <option>Igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input type="numeric" data-testid="value-filter" name="value" onChange={ handleChange } />
      </label>
      <button
        type="button"
        data-testeid="button-filter"
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
