import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <h1>Planetas de Star Wars 🪐</h1>
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
