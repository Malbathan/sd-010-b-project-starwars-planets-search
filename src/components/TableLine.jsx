import React from 'react';
import PropTypes from 'prop-types';

function TableLine(props) {
  const { planet, i } = props;

  const tags = Object.keys(planet);

  return (
    <tr i={ i }>
      {tags.map((tag, ind) => <td key={ ind }>{planet[tag]}</td>)}
    </tr>
  );
}

TableLine.propTypes = {
  planet: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default TableLine;
