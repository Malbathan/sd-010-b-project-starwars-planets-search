import React, { useContext } from 'react';
import tabbleContext from '../context/SWcontext';

const Table = () => {
  const { data: { results }, colunas, loading } = useContext(tabbleContext);
  return (
    loading ? <h1>Loading</h1>
      : (
        <table border="1">
          <thead>
            <tr>
              {colunas.map((coluna) => <th key={ colunas }>{coluna}</th>)}
            </tr>
          </thead>
          <tbody>
            {results.map((planet, indexp) => (
              <tr key={ indexp }>
                {colunas.map((collum, index) => (
                  <td key={ index }>
                    { planet[collum] }
                  </td>))}
              </tr>)) }
          </tbody>
        </table>
      )
  );
};

export default Table;
