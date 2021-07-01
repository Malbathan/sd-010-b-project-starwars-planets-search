import React from 'react';
import './App.css';

import StarWarsProvider from './Context/StarWarsProvider';
import Table from './Components/Table';

function App() {
  return (
    <StarWarsProvider>
      <Table />
      <span>Hello, App!</span>
    </StarWarsProvider>
  );
}

export default App;
