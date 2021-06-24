import React, { useContext } from 'react';
import SwContext from '../contexts/swContext';
// "name": "Alderaan",
//             "rotation_period": "24",
//             "orbital_period": "364",
//             "diameter": "12500",
//             "climate": "temperate",
//             "gravity": "1 standard",
//             "terrain": "grasslands, mountains",
//             "surface_water": "40",
//             "population": "2000000000",
//             "residents": [
//                 "https://swapi-trybe.herokuapp.com/api/people/5/",
//                 "https://swapi-trybe.herokuapp.com/api/people/68/",
//                 "https://swapi-trybe.herokuapp.com/api/people/81/"
//             ],
//             "films": [
//                 "https://swapi-trybe.herokuapp.com/api/films/1/",
//                 "https://swapi-trybe.herokuapp.com/api/films/6/"
//             ],
//             "created": "2014-12-10T11:35:48.479000Z",
//             "edited": "2014-12-20T20:58:18.420000Z",
//             "url": "https://swapi-trybe.herokuapp.com/api/planets/2/"
const TableBody = () => {
  const { data } = useContext(SwContext);
  const renderFilms = (films) => films.map((film) => film).join(',');

  const renderTableElements = () => data.map((element, index) => {
    const { name, rotation_period: rotationPeriod, diameter, climate,
      gravity, terrain, surface_water: surfaceWater, population, films,
      created, edited, url } = element;
    return (
      <tr key={ index }>
        <td>{name}</td>
        <td>{rotationPeriod}</td>
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
