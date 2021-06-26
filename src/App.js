import React from 'react';

import DataProvider from './Provider/DataProvider';
import Table from './components/Table';
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
