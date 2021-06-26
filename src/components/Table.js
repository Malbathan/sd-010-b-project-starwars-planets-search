import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    filter,
    columns,
    search,
    head,
    filters,
    filterByParameters,
    handleChange } = useContext(PlanetsContext);
  const { name } = filters;

  return (
    <div>
      <select name="column" data-testid="column-filter" onChange={ handleChange }>
        {columns.map((item, index) => (
          <option key={ index } value={ Object.values(item) }>
            { Object.values(item) }
          </option>
        ))}
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="text"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { filterByParameters(); filter(); } }
      >
        Filtro
      </button>
      <div>
        <label htmlFor="name">
          Search by name:
          <input
            type="search"
            name="name"
            data-testid="name-filter"
            onChange={ handleChange }
          />
        </label>
      </div>
      <table border="1">
        <thead>
          <tr>
            {head.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {search.filter((info) => {
            if (name === '') {
              return info;
            }
            return info.name.toLowerCase()
              .includes(name.toLocaleLowerCase());
          }).map((info, index) => (
            <tr key={ index }>
              {head.map((item, index1) => (
                <td key={ index1 }>
                  { info[item] }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
