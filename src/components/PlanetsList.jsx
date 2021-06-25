import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsList() {
  const { data, loading, fetchPlanets } = useContext(PlanetsContext);

  // didMount

  return (
    <section>
      {
        loading
          ? <p>Loading...</p>
          : (
            <table>
              <thead>
                <tr>
                  {
                    data.length
                      ? Object.keys(data[0]).map((title) => (
                        <th key={ title }>{ title }</th>
                      ))
                      : null
                  }
                </tr>
              </thead>
              <tbody>
                {
                  data.length
                    ? data.map((planet) => (
                      <tr key={ planet.name }>
                        {
                          Object.values(planet).map((planetInfo) => (
                            <td key={ planetInfo }>{planetInfo}</td>
                          ))
                        }
                      </tr>
                    ))
                    : null
                }

              </tbody>
            </table>
          )
      }
    </section>
  );
}

export default PlanetsList;
