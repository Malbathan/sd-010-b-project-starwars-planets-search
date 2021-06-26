import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Search() {
  const { data, setDataSearch, filter, setFilter,
    arrFilter, setArrFilter, coluna, setColuna } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const result = data.filter((planet) => planet.name.includes(target.value));
    setDataSearch(result);
  };

  const filterPerNumber = () => {
    // console.log(e.target);
    setColuna(coluna.filter((col) => col !== filter.coluna));
    setArrFilter([...arrFilter, filter]);
  };

  const aplyFilter = () => {
    const { sinal } = filter;
    let result = data;
    arrFilter.forEach((arr) => {
      switch (sinal) {
      case 'maior que':
        result = data.filter((planet) => planet[arr.coluna] > Number(arr.numero));
        break;
      case 'menor que':
        result = data.filter((planet) => planet[arr.coluna] < Number(arr.numero));
        break;
      case 'igual a':
        result = data.filter((planet) => planet[arr.coluna] === arr.numero);
        break;
      default:
        result = data;
        break;
      }
      setDataSearch(result);
    });
  };

  useEffect(aplyFilter, [arrFilter]);

  const removeFilter = (e) => {
    const position = e.target.parentNode.id;
    const result = arrFilter.splice(position, 1);
    setDataSearch(result);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Buscar"
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <br />
      <select
        onChange={ ({ target }) => setFilter({ ...filter, coluna: target.value }) }
        data-testid="column-filter"
      >
        { coluna.map((col) => <option key={ col } value={ col }>{ col }</option>)}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>
      <select
        onChange={ ({ target }) => setFilter({ ...filter, sinal: target.value }) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ ({ target }) => setFilter({ ...filter, numero: target.value }) }
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ filterPerNumber }
        data-testid="button-filter"
      >
        Aplicar filtro
      </button>
      { arrFilter.map((arr, position) => (
        <p id={ position } key={ `${arr.coluna} ${arr.numero}` }>
          <button onClick={ removeFilter } type="button">X</button>
          {`Filter ${position}`}
        </p>
      ))}
    </header>
  );
}

export default Search;
