import React, { useEffect, useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';
// import fetchAPI from './services/API';
import './App.css';

function App() {
  const { planets, setPlanets } = useContext(StarWarsContext);
  const tableHeader = planets[0];
  const loading = <h2>Loading</h2>;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };
    getPlanets();
  }, [setPlanets]);

  const renderTH = () => {
    if (tableHeader) {
      return Object.keys(tableHeader).filter((el) => el !== 'residents')
        .map((entrie, i) => <th key={ i }>{entrie}</th>);
    }
    return loading;
  };

  // const renderTBody = () => {
  //   if (tableHeader)
  // }

  return (
    <main>
      <table className="table">
        <thead>
          { renderTH() }
        </thead>
        <tbody>
          { }
        </tbody>
      </table>
    </main>
  );
}

export default App;
