import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import AuthProvider from './contextApi/Provider';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Table />
    </AuthProvider>
  );
}

export default App;
