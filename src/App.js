import React from 'react';
import StarwarsProvider from './components/context/StarwarsProvider';

import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <StarwarsProvider>
      <span>Hello, App!</span>
      <Table />
    </StarwarsProvider>
  );
}

export default App;
