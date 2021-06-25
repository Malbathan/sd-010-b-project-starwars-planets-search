import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import StarWarsProvider from './contex/StarWarsProvider';

export default function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}
