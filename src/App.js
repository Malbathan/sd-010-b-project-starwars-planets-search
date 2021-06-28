import React from 'react';

import './App.css';
import DataProvider from './Provider/DataProvider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <section>
      <DataProvider>
        <Header />
        <Table />
      </DataProvider>
    </section>
  );
}

export default App;
