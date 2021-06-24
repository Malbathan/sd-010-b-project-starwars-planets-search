import React, { useEffect } from 'react';
import fetchPlanets from '../services/Api';

function Planets() {
  useEffect(() => {
    async function fetchData() {
      const planetsList = await fetchPlanets();
      return planetsList;
    }
    console.log(fetchData());
  }, []);

  return (
    <div>
      <h1>olá star war</h1>
    </div>
  );
}

export default Planets;
