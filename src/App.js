import React from 'react';
import './App.css';
import Table from './components/Table';
import ApiProvider from './components/ApiProvider';

function App() {
  return (
    <main>
      <ApiProvider>
        <Table />
      </ApiProvider>
    </main>
  );
}

export default App;
