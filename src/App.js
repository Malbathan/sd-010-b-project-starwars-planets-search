import React from 'react';
import './App.css';

import StarWars from './Context/Provider';

function App() {
  return (
    <StarWars>
      <span>Hello, App!</span>
    </StarWars>
  );
}

export default App;
