import React from 'react';
import './App.css';
import Home from './pages/Home';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
