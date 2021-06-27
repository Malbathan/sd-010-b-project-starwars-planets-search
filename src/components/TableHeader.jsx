import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderTableHeader(keys, index) {
  return (
    <th key={ index }>{keys}</th>
  );
}

const TableHeader = () => (
  <StarWarsContext.Consumer>
    {({ keys }) => keys.map(renderTableHeader) }
  </StarWarsContext.Consumer>
);

export default TableHeader;
