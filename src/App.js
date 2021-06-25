import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './components/MyContext';

function App() {
  const [data, setData] = useState([{}]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchApiStarwars = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then(({ results }) => setData(results));
    };

    fetchApiStarwars();
  }, [fetching]);

  const filterPlanet = ({ target: { value } }) => {
    if (value === '') {
      return setFetching(!fetching);
    }
    const filteredPlanet = data.filter(({ name }) => name.includes(value));
    console.log(filteredPlanet);
    if (filteredPlanet.length > 0) {
      return setData(filteredPlanet);
    }
  };

  return (
    <MyContext.Provider value={ data }>
      <div>
        <input
          data-testid="name-filter"
          onChange={ filterPlanet }
        />
        <Table />
      </div>
    </MyContext.Provider>
  );
}

export default App;
