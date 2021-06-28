import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function FilterByValue() {
  const {
    setValue,
    setComparison,
    setColumn,
    handleFilterClick,
    filters,
  } = useContext(StarWarsContext);

  const selectOptionsType = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  let selectAddFilter = selectOptionsType;

  if (filters.filterByNumericValues.length > 0) {
    selectAddFilter = selectOptionsType.filter((column) => (
      column !== filters.filterByNumericValues[0].column));
  }

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {selectAddFilter.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
      <select
        defaultValue="Escolha sua comparação"
        name="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option disabled="disabled">Escolha sua comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="valueFilter">
        Insira um parâmetro:
        <input
          id="valueFilter"
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterClick }
      >
        Filtrar
      </button>
    </div>
  );
}
