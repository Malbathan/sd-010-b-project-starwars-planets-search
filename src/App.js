import React, { useContext } from 'react';
import ContextPlanets from './context/ContextPlanets';
// import './App.css';

function App() {
  const { data } = useContext(ContextPlanets);

  return (
    <div>
      <span>Hello, App!</span>
      { data.map((planet) => console.log(planet))}
    </div>
  );
}

export default App;
