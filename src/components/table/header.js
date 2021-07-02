import React from 'react';
import PropTypes from 'prop-types';

function Header({ data }) {
  const datas = data[0];
  return (
    <tr>
      { Object.keys(datas)
        .filter((header) => header !== 'residents')
        .map((header, index) => (
          <th key={ index }>{ header }</th>
        )) }
    </tr>
  );
}

Header.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Header;
