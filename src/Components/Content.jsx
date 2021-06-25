import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';
import Filters from './Filters';

function Content() {
  // const { fetchPlanets } = useContext(StarWarsContext);

  return (
    <main>
      <Filters />
      <Table />
    </main>
  );
}

export default Content;
