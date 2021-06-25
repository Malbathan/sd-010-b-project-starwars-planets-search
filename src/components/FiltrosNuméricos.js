import React, { useContext, useState } from 'react';
import MyContext from './MyContext';

function FiltrosNuméricos() {
  const { data, setData } = useContext(MyContext);
  const [comparison, setComparison] = useState('maior que');
  const [columnFilter, setColumnFilter] = useState('population');
  const [newInput, setNewInput] = useState('');
  // console.log(comparison, columnFilter, newInput)

  const handleClick = () => {
    const arrData = Object.keys(data[0]);
    const resp = arrData.filter((name) => name === columnFilter);

    let newResp;
    switch (comparison) {
    case 'maior que':
      newResp = resp.map((res) => data.filter((e) => parseInt(e[res], 10) > newInput));
      break;
    case 'menor que':
      newResp = resp.map((res) => data.filter((e) => parseInt(e[res], 10) < newInput));
      break;
    case 'igual a':
      newResp = resp.map((res) => data.filter((e) => e[res] === newInput));
      break;
    default:
      break;
    }

    if (newResp[0].length > 0) {
      setData(newResp[0]);
    }
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setNewInput(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar
      </button>
    </div>
  );
}

export default FiltrosNuméricos;
