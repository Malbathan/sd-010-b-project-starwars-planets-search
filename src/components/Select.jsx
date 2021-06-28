import React from 'react';
import PropTypes from 'prop-types';

function Select({ testid, dataOptions, name, onChange }) {
  return (
    <select data-testid={ testid } name={ name } onChange={ onChange }>
      {
        dataOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))
      }
    </select>
  );
}

Select.defaultProps = {
  testid: '',
  dataOptions: [],
  onChange: null,
};

Select.propTypes = {
  testid: PropTypes.string,
  dataOptions: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Select;
