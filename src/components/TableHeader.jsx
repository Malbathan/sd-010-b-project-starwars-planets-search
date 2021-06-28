import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderTableHeader(colHeaders, index) {
  return (
    <th key={ index }>{colHeaders}</th>
  );
}

const TableHeader = () => (
  <StarWarsContext.Consumer>
    {({ colHeaders }) => colHeaders.map(renderTableHeader) }
  </StarWarsContext.Consumer>
);

export default TableHeader;
