import React from 'react';
import AppProvider from './context/AppProvider';
import PlanetTable from './components/PlanetTable';

function App() {
  return (
    <AppProvider>
      <PlanetTable />
    </AppProvider>
  );
}

export default App;
