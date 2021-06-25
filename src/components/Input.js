import React from 'react';

import PropTypes from 'prop-types';

const Input = ({ type, placeholder, handleInput, dataTestid }) => (
  <input
    data-testid={ dataTestid }
    type={ type }
    placeholder={ placeholder }
    onChange={ handleInput }
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
