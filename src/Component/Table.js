import React, { useContext, useEffect, useState } from 'react';
import tabbleContext from '../context/SWcontext';

const Table = () => {
  const { data: { results }, colunas, loading } = useContext(tabbleContext);
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();

  function nameSearch({ target: { value } }) {
    setSearch(value);
  }

  useEffect(() => (
    !search ? setFilters(results)
      : (setFilters(results.filter((planeta) => (
        (planeta.name.includes(search))))))), [results, search]);

  return (
    loading ? <h1>Loading</h1>
      : (
        <>
          <label htmlFor="searchName">
            Pesquise por Nome:
            <input
              id="searchName"
              type="text"
              data-testid="name-filter"
              onChange={ nameSearch }
            />
          </label>
          <table border="1">
            <thead>
              <tr>
                {colunas.map((coluna) => <th key={ colunas }>{coluna}</th>)}
              </tr>
            </thead>
            <tbody>
              {filters.map((res) => (
                <tr key={ res.name }>
                  {colunas.map((coluna, index) => (
                    <td key={ index }>
                      { res[coluna] }
                    </td>))}
                </tr>)) }
            </tbody>
          </table>
        </>
      )
  );
};

export default Table;
