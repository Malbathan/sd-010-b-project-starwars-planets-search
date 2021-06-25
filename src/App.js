import React from 'react';
import Table from './components/Table';
import { Provider } from './components/PlanetsProvider';
import Filters from './components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
