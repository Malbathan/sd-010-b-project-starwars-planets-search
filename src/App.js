import React from 'react';

import DataProvider from './provider';
import Table from './components/table';
import FiltroNome from './components/filter/byName';
import FiltroNumero from './components/filter/byNumber';
import './App.css';

function App() {
  return (
    <section>
      <DataProvider>
        <FiltroNome />
        <FiltroNumero />
        <Table />
      </DataProvider>
    </section>
  );
}

export default App;
