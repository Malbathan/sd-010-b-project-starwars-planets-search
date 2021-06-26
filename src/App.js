import React from 'react';
import './App.css';
import Table from './components/Table';
import ApiProvider from './components/ApiProvider';
import Input from './components/Input';

function App() {
  return (
    <ApiProvider>
      <Input />
      <Table />
    </ApiProvider>
  );
}

export default App;
