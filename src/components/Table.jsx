import React, { useContext, useEffect, useState } from 'react';
import nextId from 'react-id-generator';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [keys, setkeys] = useState('');
  const [renderTable, setRenderTable] = useState(false);

  useEffect(() => {
    if (data.length !== 0) {
      const chaves = Object.keys(data[0]).filter((item) => item !== 'residents');
      setkeys(chaves);
      setRenderTable(true);
    }
  }, [data]);

  return (
    <div>
      {!renderTable ? <h1>Loading</h1> : (
        <table>
          <thead>
            <tr>
              {keys.map((item) => <th key={ nextId() }>{ item }</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={ nextId() }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
