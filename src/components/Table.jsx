import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  // useContext() - retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value
  const { data, isFetching, filterSearch, filterNumber } = useContext(PlanetContext);
  // isFetching (true) para renderizar um rótulo “Carregando ...”
  if (isFetching) {
    return <h2>Carregando...</h2>;
  }

  return (
    <table className="table" border="1">
      <thead>
        <tr>
          {/* https://fb.me/react-warning-keys */}
          {/* Object.keys() retorna um array de prop enumeraveis c/ se fosse um for in */}
          {/* https://pt-br.reactjs.org/docs/lists-and-keys.html */}
          {data && Object.keys(data[0]).map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {filterSearch.map((results) => (
          <tr key={ results.name }>
            <td>{results.name}</td>
            <td>{results.rotation_period}</td>
            <td>{results.orbital_period}</td>
            <td>{results.diameter}</td>
            <td>{results.climate}</td>
            <td>{results.gravity}</td>
            <td>{results.terrain}</td>
            <td>{results.surface_water}</td>
            <td>{results.population}</td>
            <td>{results.residents}</td>
            <td>{results.films}</td>
            <td>{results.created}</td>
            <td>{results.edited}</td>
          </tr>
        ))}
        {
          filterNumber.map((results, index) => (
            <tr key={ index }>
              {Object.values(results).map((value, idx) => (<td key={ idx }>{value}</td>))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
// obitive ajuda do Raphael Gumieri
