import React from 'react';
import TableHeader from './TableHeader';
import TableContent from './TableContent';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader />
        </tr>
      </thead>
      <tbody>
        <TableContent />
      </tbody>
    </table>
  );
}

export default Table;
