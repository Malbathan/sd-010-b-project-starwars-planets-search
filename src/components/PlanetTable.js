import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const PlanetTable = () => {
  const { data, loading } = useContext(AppContext);
  return (
    <div>
      {
        loading
          ? (<h2>Carregando...</h2>)
          : (
            <table>
              <thead>
                <tr>
                  <th>PLANETA</th>
                  <th>PLANETA</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((planet) => (
                    <tr key={ planet }>
                      <td>primeiro</td>
                      <td>segundo</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
      }
    </div>
  );
};

export default PlanetTable;
