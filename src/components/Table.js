import React, { useContext } from 'react';
import AppContext from '../contextApi/Context';
import RenderTableByName from './RenderTableByName';

function Table() {
  const { listOfContext: {
    state: { data,
      filters: { filterByName },
    } } } = useContext(AppContext);

  const { listOfContext: {
    state: {
      filters: {
        filterByValue: { column, comparison, value } } } } } = useContext(AppContext);

  let planetTable = data;

  if (filterByName.name) {
    planetTable = data.filter((planet) => (
      planet.name.toLowerCase().includes(filterByName.name)));
  }

  if (column && comparison && value) {
    switch (comparison) {
    case 'maior que':
      planetTable = data.filter((filterInfo) => (
        parseFloat(filterInfo[column]) > parseFloat(value)
      ));
      break;
    case 'menor que':
      planetTable = data.filter((filterInfo) => (
        filterInfo[column] < value || (
          filterInfo[column] === 'unknown')));
      break;
    default:
      planetTable = data.filter((filterInfo) => (
        filterInfo[column] === value));
      break;
    }
  }

  if (column && comparison && value) {
    console.log('Complete!');
  }

  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <table>
        {RenderTableByName(planetTable)}
      </table>
    </div>
  );
}

export default Table;
