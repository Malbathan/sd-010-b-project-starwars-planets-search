import React, { useContext } from 'react';
import MyContext from './MyContext';

const Table = () => {
  const { resultApi } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          { resultApi && Object.keys(resultApi.results[0])
            .filter((i) => i !== 'residents')
            .map((element, index) => (
              <th key={ index }>{ element }</th>
            )) }
        </tr>
      </thead>
      <tbody>
        { resultApi && resultApi.results
          .map((elementLinha, indexLinha) => (
            <tr key={ indexLinha }>
              { resultApi && Object.entries(elementLinha)
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
};

export default Table;
