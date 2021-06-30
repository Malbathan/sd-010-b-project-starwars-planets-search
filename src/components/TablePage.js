import React, { useContext, useState } from 'react';
import TableContext from '../context/tableContext';

// Object Literals
const comparacao = {
  'menor que': (val1, val2) => val1 < val2,
  'maior que': (val1, val2) => val1 > val2,
  'igual a': (val1, val2) => val1 === val2,
};

const arrayColumn = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const compareColumn = ({ comparison, column, value }, planet) => (
  comparacao[comparison](Number(planet[column]), Number(value))
);

function Table() {
  const [column, setColumn] = useState('rotation_period');
  const [comparison, setComparison] = useState('menor que');
  const [value, setValue] = useState();

  const {
    data, filters: {
      filterByName: { name },
      filterByNumericValues,
    }, setFilter,
  } = useContext(TableContext);
  // console.log(data);

  const dataFiltered = data.filter((planet) => {
    const includesName = planet.name.includes(name);
    const includesFiltro = filterByNumericValues
      .every((numericFilter) => compareColumn(numericFilter, planet));
    // console.log(planet.name, includesFiltro);
    return includesName && includesFiltro;
  });

  const handleClick = () => {
    setFilter((oldFilter) => ({ ...oldFilter,
      filterByNumericValues: [...filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    }));
  };

  const handleChange = (event) => {
    const { target: { value: nameValue } } = event;
    setFilter((oldFilter) => ({ ...oldFilter,
      filterByName: {
        name: nameValue,
      } }));
  };

  if (data.length === 0) {
    return <h1>Loding...</h1>;
  }
  return (
    <main>
      <form>
        <select
          data-testid="column-filter"
          value={ column }
          onChange={ (event) => setColumn(event.target.value) }
        >
          {arrayColumn.map((planet, index) => (
            <option key={ index } value={ planet }>{planet}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
        <div data-testid="filter">
          <input
            type="number"
            data-testid="value-filter"
            // value={ valor }
            onChange={ (event) => setValue(event.target.value) }
          />
          <button type="button" onClick={ () => setValue() }>X</button>
        </div>
        <button type="button" data-testid="button-filter" onClick={ () => handleClick() }>
          Adicionar Filtro
        </button>
      </form>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleChange }
      />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((planet, index) => <th key={ index }>{planet}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataFiltered.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
