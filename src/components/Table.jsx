import React from 'react';
import TableBody from './TableBody';

const tableHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function Table() {
  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((th, idx) => <th key={ idx }>{th}</th>)}
        </tr>
      </thead>
      <TableBody />
    </table>
  );
}

export default Table;
