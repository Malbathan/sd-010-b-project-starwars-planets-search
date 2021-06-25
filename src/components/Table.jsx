import React, { useContext } from 'react';
import StarWarsContext from '../hooks/StarWarsContext';

const NOVE = 9;

export default function Table() {
  const { results } = useContext(StarWarsContext);
  if (results !== undefined) {
    const chaves = Object.keys(results[0]);
    chaves.splice(NOVE, 2);
    return (
      <table>
        <caption>The Planets Star Wars</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>

          {
            results.map((title) => (
              <tr key={ title.name }>
                {chaves.map((chave) => (
                  <td key={ chave }>
                    {title[chave]}
                  </td>
                ))}
              </tr>
            ))
          }

        </tbody>
      </table>
    );
  }
  return <div>Loading...</div>;
}
