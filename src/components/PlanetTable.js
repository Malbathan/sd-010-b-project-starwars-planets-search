import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const PlanetTable = () => {
  const { planets, loading } = useContext(AppContext);
  return (
    <div>
      {
        loading
          ? 'Carregando...'
          : (
            planets.map((planet) => <li key={ planet }>{planet}</li>)
          )
      }
    </div>
  );
};

export default PlanetTable;
