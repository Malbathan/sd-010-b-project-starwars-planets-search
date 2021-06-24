import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const tableHeader = planets[0];
  // const loading = <h2>Loading</h2>;

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
        .map((data, i) => <th key={ i }>{data}</th>);
    }
    // return loading;
  };

  const renderTBody = () => {
    const INDEX = 9;
    if (tableHeader) {
      return (
        planets.map(
          (planet, i) => (
            <tr
              key={ i }
            >
              { Object.values(planet).map(
                (el, ix) => (ix !== INDEX ? <td key={ ix }>{ el }</td> : null),
              ) }
            </tr>
          ),
        )
      );
    }
  };

  return (
    <main className="App">
      <form>
        <input
          placeholder="Buscar"
          maxLength="30"
          data-testid="name-filter"
        />
      </form>
      <table className="table">
        <thead>
          <tr>
            { renderTH() }
          </tr>
        </thead>
        <tbody>
          { renderTBody() }
        </tbody>
      </table>
    </main>
  );
}

export default App;
