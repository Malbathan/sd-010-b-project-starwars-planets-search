import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  // console.log(data);
  return (
    <Provider>
      <di>
        <Table />
      </di>
    </Provider>
  );
}

export default App;
