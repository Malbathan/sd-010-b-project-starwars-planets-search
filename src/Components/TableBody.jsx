import React, { useContext } from 'react';
import SwContext from '../contexts/swContext';

const TableBody = () => {
  const { data, filters: { filterByName: { name } } } = useContext(SwContext);
  const renderFilms = (films) => films.map((film) => film).join(',');
  let rawData = data;
  if (name) {
    rawData = rawData.filter((planet) => planet.name.includes(name));
  }
  const renderTableElements = () => rawData.map((element, index) => {
    const { name: pName, rotation_period: rotationPeriod,
      orbital_period: orbitalPeriod, diameter, climate,
      gravity, terrain, surface_water: surfaceWater, population, films,
      created, edited, url } = element;
    return (
      <tr key={ index }>
        <td>{pName}</td>
        <td>{rotationPeriod}</td>
        <td>{orbitalPeriod}</td>
        <td>{diameter}</td>
        <td>{climate}</td>
        <td>{gravity}</td>
        <td>{terrain}</td>
        <td>{surfaceWater}</td>
        <td>{population}</td>
        <td>{renderFilms(films)}</td>
        <td>{created}</td>
        <td>{edited}</td>
        <td>{url}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {renderTableElements()}
    </tbody>
  );
};

export default TableBody;
