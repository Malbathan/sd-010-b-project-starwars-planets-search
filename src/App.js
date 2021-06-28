import React from 'react';
import './App.css';
import Table from './component/Table';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <span>Hello, App!!</span>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
