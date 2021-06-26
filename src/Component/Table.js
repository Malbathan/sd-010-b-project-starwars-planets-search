import React, { useContext, useEffect, useState } from 'react';
import tabbleContext from '../context/SWcontext';

const Table = () => {
  const arraySelector = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const { data: { results }, colunas, loading } = useContext(tabbleContext);
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState([]);
  const [typeChoosen, setTypeChoosen] = useState('population');
  const [compChoosen, setCompChoosen] = useState('maior que');
  const [numberChoosen, setNumberChoosen] = useState(0);
  const [selectorChoosen, setSelectorChoosen] = useState(arraySelector);
  // {
  //   filterByName: {
  //     name: ''
  //   }
  // });

  // {...filters, filterByName:{ ...filters.filterByName, name:event}
  function nameSearch({ target: { value } }) {
    setSearch(value);
  }

  function remove() {
    arraySelector.filter((select, i) => (select === typeChoosen
      ? arraySelector.splice(i, 1)
      : setSelectorChoosen(arraySelector)));
  }

  function submitInfo() {
    switch (compChoosen) {
    case 'maior que':
      remove();
      return setFilters(
        filters.filter(
          (planeta) => Number(planeta[typeChoosen]) > Number(numberChoosen),
        ),
      );
    case 'menor que':
      remove();
      return setFilters(
        filters.filter(
          (planeta) => Number(planeta[typeChoosen]) < Number(numberChoosen),
        ),
      );

    case 'igual a':
      remove();
      return setFilters(
        filters.filter(
          (planeta) => Number(planeta[typeChoosen]) === Number(numberChoosen),
        ),
      );

    default:
      setSelectorChoosen(arraySelector);
      return setFilters(results);
    }
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
            Pesquise por Nome
            <input
              id="searchName"
              type="text"
              data-testid="name-filter"
              onChange={ nameSearch }
            />
          </label>
          <label htmlFor="searchType">
            Pesquise por tipo:
            <select
              id="searchType"
              data-testid="column-filter"
              onChange={ ({
                target: { value },
              }) => setTypeChoosen(value) }
            >
              {selectorChoosen.map(
                (select, i) => (
                  <option name={ i } key={ select } value={ select }>
                    {select}
                  </option>),
              )}
            </select>
          </label>
          <label htmlFor="searchNum">
            <select
              id="searchNum"
              data-testid="comparison-filter"
              onChange={
                ({ target: { value } }) => setCompChoosen(value)
              }
            >
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
            <input
              type="number"
              data-testid="value-filter"
              onChange={
                ({ target: { value } }) => setNumberChoosen(value)
              }
            />
          </label>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ submitInfo }
          >
            filtro
          </button>
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
