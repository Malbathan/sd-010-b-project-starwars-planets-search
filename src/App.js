import React from 'react';

import DataProvider from './provider';
import Table from './components/table';
import Filtro from './components/filter';
import './App.css';

function App() {
  return (
    <section>
      <DataProvider>
        <Filtro />
        <Table />
      </DataProvider>
    </section>
  );
}

export default App;
