import React from 'react';

import TablePlanets from './components/TablePlanets';
import TableProvider from './provider/TableProvider';

function App() {
  return (
    <TableProvider>
      <h1>Star Wars Planet</h1>
      <TablePlanets />
    </TableProvider>
  );
}

export default App;
