import React from 'react';
import StarWars from './context/StarWars';

function App() {
  const aux = React.useContext(StarWars);
  console.log(aux.aux1);
  return (
    <div>
      <span>Hello, App!</span>
      {/* {data.map((name) => <li key={ name.name }>{name.name}</li>)} */}
    </div>
  );
}

export default App;
