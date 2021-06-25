import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);

  const frstElemnt = planets[0];
  const tableHead = frstElemnt ? Object.keys(frstElemnt)
    .filter((el) => el !== 'residents') : null;

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPlanets(results);
    };
    getPlanets();
  }, [setPlanets]);

  const renderTH = () => {
    if (frstElemnt) {
      return tableHead.map((data, i) => <th key={ i }>{data}</th>);
    }
  };

  const searchFilter = () => {
    console.log(filter);
    console.log(setFilter);
  };

  const renderTBody = () => {
    const INDEX = 9;
    if (frstElemnt) {
      return (
        planets.map(
          (planet, i) => (
            <tr
              key={ i }
            >
              {/* { console.log(planet) } */}
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
          onChange={ searchFilter }
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
