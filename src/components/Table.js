import React, { useContext } from 'react';
import MyContext from './MyContext';

export default function Table() {
  const { data, setData, fetching, setFetching } = useContext(MyContext);

  const filterPlanet = ({ target: { value } }) => {
    if (value === '') {
      return setFetching(!fetching);
    }
    const filteredPlanet = data.filter(({ name }) => name.includes(value));
    console.log(filteredPlanet);
    if (filteredPlanet.length > 0) {
      return setData(filteredPlanet);
    }
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ filterPlanet }
      />
      <table>
        <thead>
          <tr>
            {
              Object.keys(data[0]).filter((infos) => infos !== 'residents')
                .map((res) => <th key={ res }>{ res }</th>)
            }
          </tr>
        </thead>

        <tbody>
          {
            data.map((planet) => (
              <tr key={ planet }>
                {Object.keys(planet)
                  .filter((res) => res !== 'residents')
                  .map((infos) => <td key={ infos }>{ planet[infos] }</td>)}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
