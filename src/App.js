import React from 'react';
import StarwarsProvider from './components/context/StarwarsProvider';

import FilterByName from './components/FilterByName';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarwarsProvider>
      <span>Hello, App!</span>
      <FilterByName />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
