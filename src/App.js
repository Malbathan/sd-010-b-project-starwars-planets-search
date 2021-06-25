import React from 'react';
import './App.css';
import Provider from './context/Provider';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
