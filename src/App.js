import React from 'react';
import './App.css';
import FormSearch from './components/Inputs/FormSearch';
import InputFilterName from './components/Inputs/InputFilterName';
import Table from './components/table/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <InputFilterName />
      <FormSearch />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
