import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  // const [filter, setFilter] = useState([]);

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

  const newPlanets = () => {
    // remove a specific key of object: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
    if (frstElemnt) {
      const response = planets.map(
        (planet) => {
          const filtered = Object.keys(planet)
            .filter((key) => tableHead.includes(key))
            .reduce((obj, key) => {
              obj[key] = planet[key];
              return obj;
            }, {});
          return filtered;
        },
      );
      return response;
    }
  };

  const renderTH = (arrayOfData) => {
    if (frstElemnt) {
      return <tr>{arrayOfData.map((data, i) => <th key={ i }>{data}</th>)}</tr>;
    }
  };

  const renderTB = () => {
    if (frstElemnt) {
      const official = newPlanets().map((el) => Object.values(el));
      const filtrada = official
        .map((array, i) => (
          <tr key={ i }>
            { array
              .map((el, index) => <td key={ index }>{el}</td>) }
          </tr>));
      console.log(official);
      return filtrada;
    }
  };

  // const searchFilter = () => {
  //   console.log(filter);
  //   console.log(setFilter);
  // };

  return (
    <main className="App">
      <form>
        <input
          placeholder="Buscar"
          maxLength="30"
          data-testid="name-filter"
          // onChange={ searchFilter }
        />
      </form>
      <table className="table">
        <thead>
          { renderTH(tableHead) }
        </thead>
        <tbody>
          { renderTB() }
        </tbody>
      </table>
    </main>
  );
}

export default App;
