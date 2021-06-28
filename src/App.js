// import { array } from 'jest-runtime/node_modules/@types/yargs';
import React, { useState, useEffect } from 'react';
// import FetchAPI from './hooks/FetchApi';
import './App.css';
// Starting Project...
function App() {
  // const [planets, setUrl] = FetchAPI();
  const [info, getInfo] = useState([]);

  useEffect(() => {
    const planets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      const out = results.map((result) => { delete result.residents; return result; });
      getInfo(out);
    };
    planets();
  }, []);
  if (info.length === 0) return <div>Loading...</div>;
  return (
    <div>
      <table>
        <tr>{Object.keys(info[0]).map((headers, i) => <th key={ i }>{headers}</th>)}</tr>
        {info.map((item, i) => (
          <tr key={ i }>
            {
              Object.keys(item).map(
                (key, id) => <td key={ id }>{item[key]}</td>,
              )
            }
          </tr>))}
      </table>
    </div>
  );
}

export default App;
