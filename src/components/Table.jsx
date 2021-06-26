import React, { useContext } from 'react';
import MyContext from './MyContext';

const Table = () => {
  const { resultApi } = useContext(MyContext);
  if (resultApi) {
    return (
      <table>
        <thead>
          <tr>
            { resultApi.length !== 0 && Object.keys(resultApi[0])
              .filter((i) => i !== 'residents')
              .map((element, index) => (
                <th key={ index }>{ element }</th>
              )) }
          </tr>
        </thead>
        <tbody>
          { resultApi.length !== 0 && resultApi
            .map((elementLinha, indexLinha) => (
              <tr key={ indexLinha }>
                { resultApi.length !== 0 && Object.entries(elementLinha)
                  .filter((i) => i[0] !== 'residents')
                  .map((elementColuna, indexColuna) => (
                    <td key={ indexColuna }>
                      { elementColuna[1] }
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
  return <h1>Loading...</h1>;
};

export default Table;
