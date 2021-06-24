import React from 'react';
import PropTypes from 'prop-types';

function Theader({ attributes }) {
  return (
    <thead>
      <tr>
        {attributes.map((el) => (
          <th key={ el }>{el}</th>
        ))}
      </tr>
    </thead>
  );
}

Theader.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Theader;
