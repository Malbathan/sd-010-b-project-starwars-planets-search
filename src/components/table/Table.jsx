import React from 'react';
import ContentsTable from './ContentsTable';

import HeaderTable from './HeaderTable';

function Table() {
  return (
    <table>
      <thead>
        <HeaderTable />
      </thead>
      <tbody>
        <ContentsTable />
      </tbody>
    </table>
  );
}

export default Table;
