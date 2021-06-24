import React, { useState, useEffect } from 'react';
import PlanetLine from './PlanetLine';

function Table(data) {

  const teste = () => {
    data.data.map((planet) => console.log(planet));
  };
  return (
    <table>
      { teste }
    </table>
  );
}

export default Table;
