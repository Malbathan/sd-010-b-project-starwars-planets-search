import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Content from './Components/Content';

function App() {
  return (
    <StarWarsProvider>
      <Content />
    </StarWarsProvider>
  );
}

export default App;
