import React from 'react';

import Provider from './context/ProviderContext';
import Table from './Pages/Table';

import './App.css';

function App() {
  return (
    <Provider>
      <div className="App App-header">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
