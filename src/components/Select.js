import React from 'react';
import PropTypes from 'prop-types';

function Select({ value, handle, options, id }) {
  return (
    <select
      value={ value }
      data-testid={ id }
      onChange={ ({ target: { value: v } }) => handle(v) }
    >
      {options.map((el, idx) => (
        <option key={ `column - ${idx}` } value={ el }>
          {el}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handle: PropTypes.func.isRequired,
};

export default Select;
