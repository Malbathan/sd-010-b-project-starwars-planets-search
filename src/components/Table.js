import React, { useContext, useState } from 'react';
import starwarsContext from '../context/starwarsContext';

function Table() {
  const [filter, setFilter] = useState('');
  const { data } = useContext(starwarsContext);
  const handleChange = ({ target: { value } }) => setFilter(value);
  if (!data) return <p>Carregando...</p>;
  return (
    <>
      <input data-testid="name-filter" onChange={ handleChange } />
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
      { data.filter((planet) => planet.name.includes(filter)).map((planets, index) => (
        <tr key={ index }>
          {Object.values(planets)
            .map((values, indexs) => <td key={ indexs }>{values}</td>)}
        </tr>))}
    </>
  );
}

export default Table;
