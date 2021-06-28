import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filter from './Filter';

function PlanetsList() {
  const { data, loading, search, categories } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState(data);
  const [categoriesFilter, setCategoriesFilter] = useState(categories);
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
    const columnIndex = categoriesFilter.indexOf(column);
    const categoriesCopy = [...categoriesFilter];
    categoriesCopy.splice(columnIndex, 1);

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
    setCategoriesFilter(categoriesCopy);
  };

  return (
    <section>
      <Filter filterByNumber={ filterByNumber } categories={ categoriesFilter } />
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
