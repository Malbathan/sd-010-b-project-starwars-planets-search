import React, { useEffect, useState } from 'react';
import Table from './component/Table';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // didMount - buscando planetas
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    };
    getPlanets();
  }, []);

  return (
    <>
      <header>Starwars Planets</header>
      <Table data={ data } />
    </>
  );
}

export default App;
