import React from 'react';
import Provider from './context/myProvider';
import Table from './components/table';
import Filter from './components/filtros';
import './App.css';

function App() {
  return (
    <Provider>
      <main>
        <span>Star Wars Planets</span>
        <Filter />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
