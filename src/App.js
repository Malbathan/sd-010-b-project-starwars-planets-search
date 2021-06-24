import React from 'react';
import ProviderStarWars from './context/ProviderStarWars';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <ProviderStarWars>
      <Table />
    </ProviderStarWars>
  );
}

export default App;
