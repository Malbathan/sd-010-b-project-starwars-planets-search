import React from 'react';

import Provider from './context/ProviderContext';
import Table from './Pages/Table';

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
