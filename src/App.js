import React from 'react';
import Table from './components/Table';
import AuthProvider from './context/Provider';

function App() {
  return (
    <AuthProvider>
      <Table />
    </AuthProvider>
  );
}

export default App;
