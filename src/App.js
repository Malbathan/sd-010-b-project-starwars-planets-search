import React from 'react';
import './App.css';
import Table from './component/Table';
import Filter from './component/Filter';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
