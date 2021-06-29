import React from 'react';
import './App.css';

import StarWars from './Context/Provider';
import Table from './Components/Table';

function App() {
  return (
    <StarWars>
      <Table />
      <span>Hello, App!</span>
    </StarWars>
  );
}

export default App;
