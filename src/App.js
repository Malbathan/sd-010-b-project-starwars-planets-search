import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './components/MyContext';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchApiStarwars = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then(({ results }) => setData(results));
    };

    fetchApiStarwars();
  }, []);

  return (
    <MyContext.Provider value={ data }>
      <div>
        <Table />
      </div>
    </MyContext.Provider>
  );
}

export default App;
