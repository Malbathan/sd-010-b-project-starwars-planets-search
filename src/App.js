import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <span>A long time agora in a galaxy far, far away...</span>
      <Table />
    </Provider>
  );
}

export default App;
