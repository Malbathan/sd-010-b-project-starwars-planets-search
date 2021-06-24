import React from 'react';
import './App.css';
import Table from './components/Table';

import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
