import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';

export default function Planets() {
  const { planets } = useContext(PlanetsContext);
  return (
    <div>
      {planets.map(({ name }, index) => (
        <p key={ index }>{name}</p>
      ))}
    </div>
  );
}
