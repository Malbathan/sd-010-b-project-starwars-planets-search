import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import '../App.css';

function Search() {
  const { data, setDataSearch, filter, setFilter,
    arrFilter, setArrFilter, coluna, setColuna } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const result = data.filter((planet) => planet.name.includes(target.value));
    setDataSearch(result);
  };

  const filterPerNumber = () => {
    const result = coluna.filter((col) => col !== filter.coluna);
    setColuna(result);
    setArrFilter([...arrFilter, filter]);
    setFilter({
      coluna: coluna[0],
      sinal: 'maior que',
      numero: '',
    });
  };

  const aplyFilter = () => {
    let result = data;
    arrFilter.forEach((arr) => {
      const { sinal } = arr;
      switch (sinal) {
      case 'maior que':
        result = result.filter((planet) => planet[arr.coluna] > Number(arr.numero));
        break;
      case 'menor que':
        result = result.filter((planet) => planet[arr.coluna] < Number(arr.numero));
        break;
      case 'igual a':
        result = result.filter((planet) => planet[arr.coluna] === arr.numero);
        break;
      default:
        result = data;
        break;
      }
      setDataSearch(result);
    });
  };

  const removeFilter = (e) => {
    const { id } = e.target.parentNode;
    console.log(id);
    const index = arrFilter.filter((arr) => id !== arr.coluna);
    setArrFilter(index);
    if (arrFilter.length !== 0) {
      setDataSearch(data);
    }
    // aplyFilter();
  };

  useEffect(aplyFilter, [arrFilter]);

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
      <div className="filters">
        { arrFilter.map((arr) => (
          <p data-testid="filter" id={ arr.coluna } key={ `${arr.coluna} ${arr.numero}` }>
            <button onClick={ removeFilter } type="button">X</button>
            {` Filter ${arr.coluna}`}
          </p>
        ))}
      </div>
    </header>
  );
}

export default Search;
