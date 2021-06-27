import React from 'react';
import AppProvider from './context/AppProvider';
import PlanetSearch from './components/PlanetSearch';
import PlanetTable from './components/PlanetTable';

function App() {
  return (
    <AppProvider>
      <PlanetSearch />
      <PlanetTable />
    </AppProvider>
  );
}

export default App;
