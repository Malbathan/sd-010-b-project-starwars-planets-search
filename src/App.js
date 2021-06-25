import React from 'react';
import './App.css';
import InputFilterName from './components/Inputs/InputFilterName';
import InputSelectType from './components/Inputs/InputSelectType';
import Table from './components/table/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <InputFilterName />
      <InputSelectType />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
