import React from 'react';
// import { useStarContext } from '../context/myContext';

export default function Table() {
  const { starData, filtersData } = useStarContext();
  const [keyObj] = starData;
  const arrKeys = [keyObj];

  return (
    <div>
      <div className="star-table">
        {starData.length && (
          <table>
            <thead className="header-table">
              <tr>
                {arrKeys.map((key) => Object.keys(key).map((item, index) => (
                  item !== 'residents' && <th key={ index }>{item}</th>
                )))}
              </tr>
            </thead>
            <tbody>
              {filtersData().map((planet, index) => {
                const {
                  name,
                  diameter,
                  climate,
                  gravity,
                  terrain,
                  population,
                  films,
                  created,
                  edited,
                  url,
                } = planet;
                return (
                  <tr key={ index }>
                    <td data-testid="planet-name">{name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{diameter}</td>
                    <td>{climate}</td>
                    <td>{gravity}</td>
                    <td>{terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{population}</td>
                    <td>{films}</td>
                    <td>{created}</td>
                    <td>{edited}</td>
                    <td>{url}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
