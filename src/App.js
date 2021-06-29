import React from 'react';
import './App.css';
import Provider from './Provider';
import Table from './components/Table';

function App() {
  return (
    <section>
      <Provider>
        <Table />
      </Provider>
    </section>
  );
}

export default App;
