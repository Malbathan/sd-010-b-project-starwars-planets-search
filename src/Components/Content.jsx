import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Content() {
  const { fetchPlanets } = useContext(StarWarsContext);

  const getPlanet = () => {
    fetchPlanets();
  };

  useEffect(
    getPlanet,
    [],
  );

  return (
    <main>
      {' '}
      <h1>Content</h1>
      <button
        type="button"
        onClick={ () => fetchPlanets() }
      >
        {' '}
        Clique Aqui
      </button>

    </main>
  );
}

export default Content;
