import React, { useContext } from 'react';
import PlanetsContext from './context/PlanetsContext';

export default function Planets() {
  const { planets } = useContext(PlanetsContext);
  console.log(planets);
  return <div />;
}
