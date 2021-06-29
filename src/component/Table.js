import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, loading, filters } = useContext(StarWarsContext);

  // useEffect(() => { async function fetchApi() {
  //   const planets = await getAPI();
  //   planets.map((planet) => delete planet.residents);
  //   setData(planets);
  //   setLoading(true);
  // } fetchApi();
  // }, []);

  return (
    loading
      ? (
        <table>
          <tr>
            {Object.keys(data[0]).map((el) => <th key={ el }>{el}</th>)}
          </tr>
          {/* {Object.values(...data).map((val, i) => <td key={ i }>{val}</td>)} */}
          {data.filter((e) => e.name.includes(filters.filterByName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>))}
        </table>
      )
      : (<h1>Loading...</h1>)
  );
}
