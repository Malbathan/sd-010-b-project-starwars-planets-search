import React, { useContext } from 'react';
import SwContext from '../contexts/swContext';
import useLogicalFilter from '../Hooks/useLogicalFilter';
import useOrderFilter from '../Hooks/useOrderFilter';

const TableBody = () => {
  const { data, filters: { filterByNumericValues, order } } = useContext(SwContext);
  const { sorted } = useOrderFilter(data, order);
  const { planets } = useLogicalFilter(sorted, filterByNumericValues);

  const renderFilms = (films) => films.map((film) => film).join(',');
  const renderTableElements = () => planets.map((element, index) => {
    const { name: pName, rotation_period: rotationPeriod,
      orbital_period: orbitalPeriod, diameter, climate,
      gravity, terrain, surface_water: surfaceWater, population, films,
      created, edited, url } = element;
    return (
      <tr key={ index }>
        <td data-testid="planet-name">{pName}</td>
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
