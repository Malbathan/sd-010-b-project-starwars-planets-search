import React from 'react';
import './App.css';
import InputFilter from './components/Inputs/InputFilter';
import Table from './components/table/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <InputFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
