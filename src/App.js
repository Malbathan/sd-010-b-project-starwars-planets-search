import React, { useEffect, useContext } from 'react';

import Table from './components/Table'
import ContextStarWars from './context/ContextStarWars';
import './App.css';

function App() {
  const { data, setData } = useContext(ContextStarWars);

  useEffect(() => {
    async function featchPlanets() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const objResponse = await fetch(url).then((results) => results.json());
      const arrayPlanets = objResponse.results.map((obj) => {
        delete obj.residents;
        return obj;
      });
      setData(arrayPlanets);
    }

    featchPlanets();
  }, [setData]);

  return (
    <Table />
  );
}

export default App;
