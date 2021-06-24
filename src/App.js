import React from 'react';
import './App.css';
import Planets from './components/Planets';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Planets />
    </StarWarsProvider>
  );
}

export default App;
