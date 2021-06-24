import React, { useContext } from 'react';
import TableContext from '../context/tablecontext';

// estrutura da tabela
// tr é linha table row
// td é coluna table division

function Table() {
  const { data, collums } = useContext(TableContext);
  return (
    <table border="1">
      <thead>
        <tr>
          {collums.map((collum, index) => <th key={ index }>{collum}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, indexp) => (
          <tr key={ indexp }>
            {collums.map((collum, index) => (
              <td key={ index }>
                { planet[collum] }
              </td>))}
          </tr>)) }
      </tbody>
    </table>
  );
}
export default Table;
