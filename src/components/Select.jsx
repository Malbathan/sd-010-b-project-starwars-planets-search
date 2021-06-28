import React from 'react';
import PropTypes from 'prop-types';

function Select({ testid, dataOptions, name }) {
  return (
    <select data-testid={ testid } name={ name }>
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
};

Select.propTypes = {
  testid: PropTypes.string,
  dataOptions: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
};

export default Select;
