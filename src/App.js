import React from 'react';
import './App.css';
import Table from './components/Table';
import StarwarsProvider from './context/starwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <span>Hello, App!</span>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
