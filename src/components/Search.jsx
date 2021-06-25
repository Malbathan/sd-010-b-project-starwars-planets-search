import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Search() {
  const { data, setDataSearch, filter, setFilter } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const result = data.filter((planet) => planet.name.includes(target.value));
    setDataSearch(result);
  };

  const filterPerNumber = () => {
    const { coluna, sinal, numero } = filter;
    let result = data;
    console.log(sinal);
    switch (sinal) {
    case 'maior que':
      result = data.filter((planet) => planet[coluna] > Number(numero));
      break;
    case 'menor que':
      result = data.filter((planet) => planet[coluna] < Number(numero));
      break;
    case 'igual a':
      result = data.filter((planet) => planet[coluna] === numero);
      break;
    default:
      result = data;
      break;
    }
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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
    </header>
  );
}

export default Search;
