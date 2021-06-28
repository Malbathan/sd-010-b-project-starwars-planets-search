import React from 'react';

import './App.css';
import FilterIndex from './components/filters/FilterIndex';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <FilterIndex />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
// projeto feito em parceria com Paulo Xavier
