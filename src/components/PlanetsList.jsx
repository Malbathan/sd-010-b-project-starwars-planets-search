import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filter from './Filter';

function PlanetsList() {
  const { data, loading, search } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState(data);
  const {
    filters: {
      filterByName: { name: searchText },
      filterByNumericValues: { column, comparison, value: quantity },
    } } = search;

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    const searchRegex = new RegExp(searchText, 'i');
    setPlanets(
      data.filter((planet) => searchRegex.test(planet.name)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const filterByNumber = () => {
    setPlanets(
      data.filter((planet) => {
        const numericValue = parseInt(quantity, 10);
        const numericColumn = parseInt(planet[column], 10);
        if (comparison === 'maior que') return numericColumn > numericValue;
        if (comparison === 'menor que') return numericColumn < numericValue;
        if (comparison === 'igual a') return numericColumn === numericValue;
        return true;
      }),
    );
  };

  return (
    <section>
      <Filter filterByNumber={ filterByNumber } />
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
