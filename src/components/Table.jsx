import React, { useContext } from 'react';
import MyContext from './MyContext';

const Table = () => {
  const { resultFiltro } = useContext(MyContext);
  if (resultFiltro) {
    return (
      <table>
        <thead>
          <tr>
            { resultFiltro.length !== 0 && Object.keys(resultFiltro[0])
              .filter((i) => i !== 'residents')
              .map((element, index) => (
                <th key={ index }>{ element }</th>
              )) }
          </tr>
        </thead>
        <tbody>
          { resultFiltro.length !== 0 && resultFiltro
            .map((elementLinha, indexLinha) => (
              <tr key={ indexLinha }>
                { resultFiltro.length !== 0 && Object.entries(elementLinha)
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
