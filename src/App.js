import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Planets from './services/API';
import Table from './components/Table';

function App() {
  return (
    <div>
      <span>Hello, App!</span>
      <Planets>
        <Table />
      </Planets>
    </div>
  );
}

export default App;
