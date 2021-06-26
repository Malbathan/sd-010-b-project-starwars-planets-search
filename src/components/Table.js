import React, { useContext } from 'react';
import MyContext from './MyContext';

export default function Table() {
  const { setData, data, fetching, setFetching, newFilter } = useContext(MyContext);

  // useEffect(() => {
  //   fetchApi();
  // }, [fetchApi])

  const filterPlanet = ({ target: { value } }) => {
    if (value === '') {
      return setFetching(!fetching);
    }

    newFilter(value);
    const filteredPlanet = data.filter(({ name }) => name.includes(value));
    if (filteredPlanet.length > 0) {
      setData(filteredPlanet);
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
