import React from 'react';
import './App.css';
import Home from './components/Home';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
