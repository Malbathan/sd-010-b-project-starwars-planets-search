import React from 'react';
import PropTypes from 'prop-types';

function Thead({ data }) {
  let keys = [];

  if (data.length) {
    keys = Object.keys(data[0]);
  }

  return (
    <thead>
      <tr>
        {keys.map((key, index) => <th key={ index }>{key}</th>)}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Thead;
