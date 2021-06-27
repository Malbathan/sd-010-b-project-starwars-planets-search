import React from 'react';
// import React, { useEffect, useState } from 'react';
// import renderTB from './Components/tableBody';
import TBody from './Components/TBody';
import SWProvider from './context/SWProvider';
import Filter from './Components/Filter';
import './App.css';

function App() {
  return (
    <SWProvider>
      <Filter />
      <TBody />
    </SWProvider>
  );
}

export default App;
