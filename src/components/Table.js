import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, head, filters, handleChange } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  return (
    <div>
      <label htmlFor="name">
        Search by name:
        <input
          type="search"
          data-testid="name-filter"
          id="name"
          onChange={ handleChange }
        />
      </label>
      <table border="1">
        <thead>
          <tr>
            {head.map((item, index) => <th key={ index }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.filter((info) => {
            if (name === '') {
              return info;
            } return (info.name.toLowerCase()
              .includes(name.toLocaleLowerCase()));
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
