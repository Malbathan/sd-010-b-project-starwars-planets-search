import React from 'react';
import './App.css';
import Table from './components/Table';
import ApiProvider from './components/ApiProvider';
import Header from './components/Header';

function App() {
  return (
    <ApiProvider>
      <Header />
      <Table />
    </ApiProvider>
  );
}

export default App;
