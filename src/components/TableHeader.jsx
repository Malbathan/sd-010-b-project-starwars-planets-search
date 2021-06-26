import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderTableHeader(keys, index) {
  return (
    <td key={ index }>{keys}</td>
  );
}

const TableHeader = () => (
  <StarWarsContext.Consumer>
    {({ keys }) => keys.map(renderTableHeader) }
  </StarWarsContext.Consumer>
);

export default TableHeader;
