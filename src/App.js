import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './contex/StarWarsProvider';

export default function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}
