import React from 'react';
import Provider from './context/Provider';
// import Inputs from './components/Inputs';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      {/* <Inputs /> */}
      <Table />
    </Provider>
  );
}

export default App;
