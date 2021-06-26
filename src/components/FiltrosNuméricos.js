import React, { useContext, useState } from 'react';
import MyContext from './MyContext';

function FiltrosNuméricos() {
  const { data, setData, setFilters, filters, options } = useContext(MyContext);
  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setvalue] = useState('');
  // console.log(comparison, column, value)

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
    const arrData = Object.keys(data[0]);
    const resp = arrData.filter((name) => name === column);

    let newResp;
    switch (comparison) {
    case 'maior que':
      newResp = resp.map((res) => data.filter((e) => parseInt(e[res], 10) > value));
      break;
    case 'menor que':
      newResp = resp.map((res) => data.filter((e) => parseInt(e[res], 10) < value));
      break;
    case 'igual a':
      newResp = resp.map((res) => data.filter((e) => e[res] === value));
      break;
    default:
      break;
    }

    if (newResp[0].length > 0) {
      setData(newResp[0]);
    }

    console.log(column);
    options.splice(options.indexOf(column), 1);
  };
  return (
    <div>
      {console.log(options)}
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {
          options.map((el) => <option key={ el } value={ el }>{ el }</option>)
        }
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
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
        onChange={ ({ target }) => setvalue(target.value) }
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
