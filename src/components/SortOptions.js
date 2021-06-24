import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import Select from './Select';
import Button from './Button';
import { columns } from '../services/Planets';

function SortOptions() {
  const { state, setState } = useContext(GlobalContext);
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState();

  return (
    <div>
      <Select
        value={ column }
        handle={ (value) => setColumn(value) }
        options={ columns }
        id="column-sort"
      />
      <div
        onChange={ ({ target: { value } }) => setSort(value) }
      >
        <label htmlFor="asc">
          ASC
          <input
            data-testid="column-sort-input-asc"
            type="radio"
            value="asc"
            id="asc"
            name="sort"
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            data-testid="column-sort-input-desc"
            type="radio"
            value="desc"
            id="desc"
            name="sort"
          />
        </label>
      </div>
      <Button
        id="column-sort-button"
        handle={ () => {
          setState({ ...state, order: [column, sort] });
        } }
        text="Ordenar"
      />
    </div>
  );
}

export default SortOptions;
