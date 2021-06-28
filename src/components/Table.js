import React, { useContext, useState, useEffect } from 'react';
import TableContext from '../context/tablecontext';
// option colums ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']
// option ['maior que', 'igual a', 'menor que']

function Table() {
  const [filter, setFilter] = useState(['']);
  const selectFilter = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [selectFilterState, setSelectFilterState] = useState(selectFilter);
  const [collumsFilter, setCollumsFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberComparison, setNumberComparison] = useState(0);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, collums, loading } = useContext(TableContext);

  useEffect(() => (
    filter === '' ? setFilteredPlanets(data)
      : (
        setFilteredPlanets(data.filter((planet) => (
          (planet.name.match(filter))))))), [data, filter]);
  /// acima! Estou usando filter para fazer o mecanismo de busca

  const removeFilterDropdown = () => {
    if (comparison === 'maior que') {
      setFilteredPlanets(filteredPlanets.filter((planet) => (
        Number(planet[collumsFilter]) > Number(numberComparison))));
      const noFilter = selectFilter.filter((thead) => thead !== collumsFilter);
      setSelectFilterState(noFilter);
    }
    if (comparison === 'menor que') {
      setFilteredPlanets(filteredPlanets.filter((planet) => (
        Number(planet[collumsFilter]) < Number(numberComparison))));
      const noFilter = selectFilter.filter((thead) => thead !== collumsFilter);
      setSelectFilterState(noFilter);
    }
    if (comparison === 'igual a') {
      setFilteredPlanets(filteredPlanets.filter((planet) => (
        Number(planet[collumsFilter]) === Number(numberComparison))));
      const noFilter = selectFilter.filter((thead) => thead !== collumsFilter);
      setSelectFilterState(noFilter);
    }
  };
  /// acima! Estou fazendo um filtro condicional, esta e uma função auxiliar
  // a submitFilter

  function submitFilter() {
    switch (comparison) {
    case 'maior que':
      return removeFilterDropdown();
    case 'menor que':
      return removeFilterDropdown();
    case 'igual a':
      return removeFilterDropdown();
    default:
      return (data);
    }
  }
  function removeFilter() {
    setSelectFilterState(selectFilter);
    setFilteredPlanets(data);
  }

  // Meu Reset mas infelizmente não funciona como esperado pelo teste

  return (
    loading === true ? <h1>...Loading</h1>
      : (
        <>
          <input
            type="text"
            placeholder="FilterByName"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilter(value) }
          />
          <select
            name="column-filter"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setCollumsFilter(value) }
          >
            {selectFilterState.map((option, i) => (
              <option key={ i } value={ option }>{option}</option>))}
          </select>
          <select
            name="comparison-filter"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setComparison(value) }
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
          <input
            type="number"
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setNumberComparison(value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ submitFilter }
          >
            Filtrar
          </button>
          <div data-testid="filter">

            <button
              type="button"
              onClick={ removeFilter }
            >
              X
            </button>
          </div>
          <table border="1">
            <thead>
              <tr>
                {collums.map((collum, index) => <th key={ index }>{collum}</th>)}
              </tr>
            </thead>
            <tbody>
              {filteredPlanets.map((planet, indexp) => (
                <tr key={ indexp }>
                  {collums.map((collum, index) => (
                    <td key={ index }>
                      { planet[collum] }
                    </td>))}
                </tr>)) }
            </tbody>
          </table>
        </>)
  );
}
export default Table;
