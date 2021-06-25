import React from 'react';

import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <main>
      <table border="black">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </main>
  );
}

export default Table;
