import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { planetsList, loading } = useContext(StarWarsContext);

  return (
    <div>
      {loading ? <h1>olá star war</h1> : <h1>Carregando</h1>}

      {console.log(planetsList)}
    </div>
  );
}

export default Planets;
