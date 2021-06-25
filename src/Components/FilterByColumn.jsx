import React, { useState, useContext } from 'react';
import ApiContext from '../Context/ApiContext';

function FilterByColumn() {
  const [filterByNumericValues, setfilterByNumericValues] = useState();

  const { filterByComparison, columnOptions } = useContext(ApiContext);

  const handleChange = ({ target: { id, value } }) => {
    setfilterByNumericValues({
      ...filterByNumericValues,
      [id]: value,
    });
  };

  return (
    <fieldset>
      <select
        id="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columnOptions.map((option, index) => <option key={ index }>{option}</option>)}
      </select>

      <select
        id="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <label htmlFor="value">
        Valor
        <input
          id="value"
          onChange={ handleChange }
          data-testid="value-filter"
          type="number"
        />
      </label>
      <br />
      <button
        type="button"
        onClick={ () => filterByComparison(filterByNumericValues) }
        data-testid="button-filter"
      >
        Adiciona filtro
      </button>
    </fieldset>
  );
}

export default FilterByColumn;
