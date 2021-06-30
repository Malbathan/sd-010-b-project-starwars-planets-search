import React, { useContext } from 'react';
import dataTable from '../api/References/dataTable';
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
    planetTable = planetTable.filter((planet) => (
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
      <table>
        <thead>
          <tr>
            { dataTable.map((info) => (
              <th key={ info }>{ info }</th>
            ))}
          </tr>
        </thead>
        {RenderTableByName(planetTable)}
      </table>
    </div>
  );
}

export default Table;
