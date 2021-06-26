import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    planetsList,
    nameFilter,
  } = useContext(Context);

  const tableBody = (newPlanetsList) => (
    newPlanetsList.map((eachPlanet) => (
      <tr key={ eachPlanet.name }>
        {Object.values(eachPlanet).map((eachValue) => (
          <td key={ eachValue }>
            { eachValue }
          </td>
        ))}
      </tr>))
  );

  const filterPlanetsByName = () => {
    const { filterByName: { name } } = nameFilter;
    if (planetsList) {
      const filterPlanets = planetsList.filter(({
        name: planet,
      }) => planet.toLowerCase().includes(name.toLowerCase()));
      if (filterPlanets.length) {
        return tableBody(filterPlanets);
      }
    }
    return tableBody(planetsList);
  };

  return (
    !planetsList.length
      ? <h2>Loading...</h2>
      : (
        <>
          <h2>Tabela de Planetas</h2>
          <table>
            <thead>
              <tr>
                {
                  Object.keys(planetsList[0]).map(
                    (eachKey) => <th key={ eachKey }>{eachKey}</th>,
                  )
                }
              </tr>
            </thead>
            <tbody>
              {filterPlanetsByName()}
            </tbody>
          </table>
        </>
      )
  );
}

export default Table;
