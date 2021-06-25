import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Table from './components/Table';
import Input from './components/Input';
import SelectForm from './components/Select';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <Input />
      <SelectForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
