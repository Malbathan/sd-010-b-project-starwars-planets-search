import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { saveFilter, filterNUmbers, filtersColumn } = useContext(StarWarsContext);
  const [filter, setFilter] = useState({
    column: '', // 'population'
    comparison: '', // maior que
    value: '', // 100000
  });

  const handleChange = ({ target: { value } }) => {
    saveFilter(value);
  };
  const handleChangeFilter = ({ target: { value, name } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const handleClick = () => {
    filterNUmbers(filter);
  };

  return (
    <form>
      <label htmlFor="pesquisar">
        Pesquisar:
        <input
          type="text"
          id="pesquisar"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <div>
        <select data-testid="column-filter" name="column" onChange={ handleChangeFilter }>
          {filtersColumn.map((f) => <option key={ f } value={ f }>{ f }</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChangeFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ handleChangeFilter }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}
export default Filters;
