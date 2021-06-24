import React from 'react';

import DataProvider from './context/DataProvider';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <DataProvider>
        <Home />
      </DataProvider>
    </main>
  );
}

export default App;
