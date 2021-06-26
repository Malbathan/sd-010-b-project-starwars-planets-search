import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableHeader = () => (
  <StarWarsContext.Consumer>
    {({ keys }) => keys.map((key, index) => <th key={ index }>{key}</th>) }
  </StarWarsContext.Consumer>
);

export default TableHeader;
