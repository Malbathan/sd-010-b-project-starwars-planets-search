import React from 'react';
import AppProvider from './contexts/AppProvider';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  return (
    <AppProvider>
      <Search />
      <Table />
    </AppProvider>
  );
}

export default App;
