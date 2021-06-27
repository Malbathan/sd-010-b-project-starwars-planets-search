import React, { useState, useEffect } from 'react';
import AppContext from './context/AppContext';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((data) => data.json());
      const newResults = results.map(({ name }) => name);
      setPlanets(newResults);
    };
    fetchAPI();
  }, []);

  return (
    <AppContext.Provider>
      <ol>
        {
          planets.map((planet) => <li key={ planet }>{planet}</li>)
        }
      </ol>
    </AppContext.Provider>
  );
}

export default App;
