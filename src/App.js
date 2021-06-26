import React, { useEffect, useState } from 'react';
import newPlanets from './Components/newPlanets';
import renderTB from './Components/tableBody';
import SWStateContext from './context/SWContext';
import Filters from './Components/FilterByName';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const frstElemnt = planets[0];
  // pega o 1 obj vindo da api e filtra suas keys p/ usar no cabeçalho da tabela
  const tableHead = frstElemnt ? Object.keys(frstElemnt)
    .filter((el) => el !== 'residents') : null;

  // constroi o cabeçalho da tabela
  const renderTH = (arrayOfData) => {
    if (frstElemnt) {
      return <tr>{arrayOfData.map((data, i) => <th key={ i }>{data}</th>)}</tr>;
    }
  };

  // Faz requisição na api
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };
    getPlanets();
  }, [setPlanets]);

  // pega o newPlanets(array da api filtrado) e mapeia p/ preencher a tabela
  const arrayOfPlanetsData = frstElemnt
    ? newPlanets(frstElemnt, planets, tableHead) : null;

  return (
    <SWStateContext>
      <main className="App">
        <Filters />
        <table className="table">
          <thead>
            { renderTH(tableHead) }
          </thead>
          <tbody>
            { renderTB(frstElemnt, arrayOfPlanetsData) }
          </tbody>
        </table>
      </main>
    </SWStateContext>
  );
}

export default App;
