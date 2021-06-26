import React from 'react';
import AppContext from './context/AppContext';

function App() {
  return (
    <AppContext.Provider>
      <span>Hello, App!</span>
    </AppContext.Provider>
  );
}

export default App;
