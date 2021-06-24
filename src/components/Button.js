import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, handle, text }) {
  return (
    <button type="button" data-testid={ id } onClick={ handle }>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Button;
