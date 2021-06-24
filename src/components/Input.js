import React, { useContext } from 'react';
import { Context } from '../contexts';

function Input() {
  const { input, setInput } = useContext(Context);
  return (
    <label htmlFor="name">
      <input
        data-testid="name-filter"
        id="name"
        type="text"
        value={ input }
        onChange={ ({ target }) => setInput(target.value) }
      />
    </label>
  );
}

export default Input;
