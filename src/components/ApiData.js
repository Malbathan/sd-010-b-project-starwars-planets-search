import React, { useEffect, useState } from 'react';
import AppContext from '../AppContext';
import Table from './Table';

function ApiData() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getApi() {
      const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await api.json();
      setPlanets(results);
    }

    getApi();
  }, []);

  return (
    <AppContext.Provider value={ planets }>
      <Table />
    </AppContext.Provider>
  );
}

export default ApiData;
