import React, { useContext, useState } from 'react';
import SwContext from '../contexts/swContext';

const OPTIONS = ['name',
  'rotation_period', 'orbital_period', 'diameter', 'gravity',
  'surface_water', 'population'];
const SortOptions = () => {
  const [column, setColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('ASC');
  const { setOrder } = useContext(SwContext);
  const renderOptions = (opts) => opts
    .map((opt, i) => <option key={ i } value={ opt }>{opt}</option>);

  return (
    <div>

      <label htmlFor="sortColumn">
        Select a column to sort
        <select
          name="sortColumn"
          id="sortColumn"
          data-testid="column-sort"
          value={ column }
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          {renderOptions(OPTIONS)}
        </select>
      </label>
      <div>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          defaultChecked
          name="sortOrder"
          onClick={ () => setSortOrder('ASC') }
        />
        ASC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          name="sortOrder"
          onClick={ () => setSortOrder('DESC') }
        />
        DESC
      </div>
      <button
        type="button"
        onClick={ () => setOrder({ column, sort: sortOrder }) }
        data-testid="column-sort-button"
      >
        Sort

      </button>
    </div>
  );
};

export default SortOptions;
