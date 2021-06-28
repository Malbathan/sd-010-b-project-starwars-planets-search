import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function InputValue() {
  const { setValue, isFiltered } = useContext(StarWarsContext);

  return (
    <label htmlFor="value-number">
      Valor:
      <input
        type="number"
        id="value-number"
        data-testid="value-filter"
        disabled={ !!isFiltered }
        min="0"
        onChange={ ({ target: { value } }) => setValue({
          value,
        }) }
      />
    </label>
  );
}

export default InputValue;
