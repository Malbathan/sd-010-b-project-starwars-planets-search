import React from 'react';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

import './App.css';

function App() {
  return (
    <div>
      <ContextProvider>
        <Table />
      </ContextProvider>
    </div>
  );
}

export default App;
