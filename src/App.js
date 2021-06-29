import React from 'react';
import Table from './components/Table';
import Provider from './context/PlanetsProvider';

function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
