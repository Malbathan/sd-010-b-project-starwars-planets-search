import React from 'react';
import Table from './components/Table';
import AuthProvider from './context/Provider';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Table />
    </AuthProvider>
  );
}

export default App;
