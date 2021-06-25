import React from 'react';

import TablePlanets from './components/TablePlanets';
import TableProvider from './provider/TableProvider';

function App() {
  return (
    <TableProvider>
      <TablePlanets />
    </TableProvider>
  );
}

export default App;
