import React from 'react';
import './App.css';
import InputFilterName from './components/Inputs/InputFilterName';
import InputFilterValue from './components/Inputs/InputFilterValue';
import InputSelectRange from './components/Inputs/InputSelectRange';
import InputSelectType from './components/Inputs/InputSelectType';
import Table from './components/table/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <InputFilterName />
      <InputSelectType />
      <InputSelectRange />
      <InputFilterValue />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
