import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
// comentario para p primeiro commit

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
