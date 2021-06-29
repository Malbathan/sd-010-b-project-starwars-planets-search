import React, { useContext } from 'react';

import IndexContext from '../hooks/IndexContext';

const INDICE = 9;

export default function PlanetsTable() {
  const { data: { results } } = useContext(IndexContext);

  if (results) {
    const resultKeys = Object.keys(results[0]);
    resultKeys.splice(INDICE, 1);
    // Idéia de usar o Splice aqui no componente retirada do Junior Henrique:
    // https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/89/files
    return (
      <table>
        <caption>StarsWars Planets</caption>
        <thead>
          <tr>
            {resultKeys.map((eachResultKey) => (
              <th key={ eachResultKey }>
                {eachResultKey}
              </th>))}
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={ result.name }>
              {resultKeys.map((resultKey) => (
                <td key={ resultKey }>
                  {result[resultKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <section>Loading...</section>;
}
