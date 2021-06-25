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
      <h4>Filter</h4>
      <label htmlFor="name-filter">
        by Name:
        <input
          type="text"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => {
            setFilterByName(value);
          } }
        />
      </label>
      <label htmlFor="column-filter">
        by Column:
        <select
          data-testid="column-filter"
        >
          {createColumnOptions()}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        by Comparison:
        <select
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        by Value:
        <input
          type="number"
          data-testid="value-filter"
        />
      </label>
      <button type="button" data-testid="button-filter">Filter</button>
    </>
  );
}

export default FiltersInsert;
