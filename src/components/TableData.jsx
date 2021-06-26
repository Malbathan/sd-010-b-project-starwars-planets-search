import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableData = () => (
  <StarWarsContext.Consumer>
    {
      ({ data }) => data.map(({ name }, index) => <td key={ index }>{name}</td>)
    }
  </StarWarsContext.Consumer>
);

export default TableData;
