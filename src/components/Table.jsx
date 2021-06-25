import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    planetsList,
  } = useContext(Context);

  return (
    !planetsList.length ? <h2>Loading...</h2>
      : <table>
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
          {planetsList.map((eachElement) => (
            <tr key={ eachElement.name }>
              {Object.values(eachElement).map((eachValue) => (
                <td key={ eachValue }>
                  {eachValue}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>
  );
}

export default Table;
