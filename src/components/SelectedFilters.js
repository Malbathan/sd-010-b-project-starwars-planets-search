import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function SelectedFilters() {
  const {
    filters,
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (column) => {
    const updatedFilters = filterByNumericValues.filter((item) => item.column !== column);
    setFilterByNumericValues(updatedFilters);
    setColumnOptions([...columnOptions, column]);
  };

  return filterByNumericValues.length > 0 ? (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ column } data-testid="filter">
          <p>
            Column:
            <span>{column}</span>
          </p>
          <p>
            Comparison:
            <span>{comparison}</span>
          </p>
          <p>
            Value:
            <span>{value}</span>
          </p>
          <button
            type="button"
            id={ index }
            onClick={ () => removeFilter(column) }
          >
            x
          </button>
        </div>
      ))}
    </div>
  ) : null;
}
