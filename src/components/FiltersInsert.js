import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FiltersInsert() {
  const { planets, setFilterByName } = useContext(TableContext);

  const createColumnOptions = () => {
    if (planets) {
      const keys = Object.keys(planets[0]);
      const arrayObject = keys.filter((key) => key !== 'residents');
      return arrayObject.map((plan, index) => (
        <option key={ index } value={ plan }>{plan}</option>
      ));
    }
  };

  return (
    <>
      <label htmlFor="name-filter">
        Filter by Name:
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => {
            setFilterByName(value);
          } }
        />
      </label>
      <label htmlFor="column-filter">
        Filter by Column:
        <select
          data-testid="column-filter"
        >
          {createColumnOptions()}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by Comparison:
        <select
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
    </>
  );
}

export default FiltersInsert;
