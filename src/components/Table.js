import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';

function Table() {
  const { data } = useContext(starwarsContext);
  if (!data) return <p>Carregando...</p>;
  return (
    <>
      <tr>
        <th>name</th>
        <th>rotation period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
      { data.map((planets, index) => (
        <tr key={ index }>
          {Object.values(planets)
            .map((values, indexs) => <td key={ indexs }>{values}</td>)}
        </tr>))}
    </>
  );
}

export default Table;
