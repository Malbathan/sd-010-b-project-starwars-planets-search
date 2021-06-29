import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderPlanets(filteredPlanets, colHeaders) {
  return (
    filteredPlanets.map((planet, key) => (
      <tr key={ key }>
        {
          colHeaders.map((head) => (
            <td key={ head }>{planet[head]}</td>
          ))
        }
      </tr>
    )));
}

const TableContent = () => (

  <StarWarsContext.Consumer>
    {
      ({ filteredPlanets, colHeaders }) => renderPlanets(filteredPlanets, colHeaders)
    }
  </StarWarsContext.Consumer>
);

export default TableContent;
