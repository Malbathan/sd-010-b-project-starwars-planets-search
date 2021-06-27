import React from 'react';

import DataProvider from './provider';
import Table from './components/table';
import './App.css';

function App() {
  return (
    <section>
      <DataProvider>
        <Table />
      </DataProvider>
    </section>
  );
}

export default App;
