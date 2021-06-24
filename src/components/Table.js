import React from 'react';
import MyContext from './MyContext';

export default function Table() {
  return (
    <div>
      <MyContext.Consumer>
        {
          (value) => (
            <table>
              <thead>
                <tr>
                  {
                    Object.keys(value[0]).filter((infos) => infos !== 'residents')
                      .map((res) => <th key={ res }>{ res }</th>)
                  }
                </tr>
              </thead>

              <tbody>
                {
                  value.map((planet) => (
                    <tr key={ planet }>
                      {Object.keys(planet)
                        .filter((res) => res !== 'residents')
                        .map((infos) => <td key={ infos }>{ planet[infos] }</td>)}
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
        }
      </MyContext.Consumer>
    </div>
  );
}
