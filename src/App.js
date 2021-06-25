import React from 'react';
import './App.css';
import Table from './components/Table';
import StarwarsProvider from './context/starwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
