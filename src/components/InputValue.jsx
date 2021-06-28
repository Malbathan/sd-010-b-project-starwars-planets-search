import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function InputValue() {
  const { setValue } = useContext(StarWarsContext);

  return (
    <label htmlFor="value-number">
      Valor:
      <input
        type="number"
        id="value-number"
        data-testid="value-filter"
        min="0"
        onChange={ ({ target: { value } }) => setValue({
          value,
        }) }
      />
    </label>
  );
}

export default InputValue;
