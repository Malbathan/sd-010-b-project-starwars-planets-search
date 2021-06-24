import React, { useState, useEffect } from 'react';
import Table from './Table';

function PlanetsList() {
  const [data, setData] = useState({});

  async function getUser() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const userData = await response.json();
    setData(userData.results);
  }

  useEffect(() => {
    getUser();
  }, []);
  console.log(data[0]);
  return (
    <div>
      <Table data={ data } />
    </div>
  );
}

export default PlanetsList;
