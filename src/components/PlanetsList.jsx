import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filter from './Filter';

function PlanetsList() {
  const { data, loading, search } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState(data);
  const { filters: { filterByName: { name: searchText } } } = search;

  useEffect(() => {
    setPlanets(
      data.filter((planet) => (searchText ? planet.name.includes(searchText) : true)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  return (
    <section>
      <Filter />
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
                  planets.length
                    ? planets.map((planet) => (
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
