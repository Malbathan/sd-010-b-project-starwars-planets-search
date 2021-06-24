import React from 'react';
import PropTypes from 'prop-types';

function Input({ value, id, handle, type }) {
  return (
    <input
      id="input"
      type={ type }
      value={ value }
      data-testid={ id }
      onChange={ ({ target: { value: v } }) => handle(+v) }
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handle: PropTypes.func.isRequired,
}.isRequired;

export default Input;
