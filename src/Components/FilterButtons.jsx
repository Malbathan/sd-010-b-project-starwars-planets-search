import React, { useContext } from 'react';
import SwContext from '../contexts/swContext';

const FilterButtons = () => {
  const { removeFilter, filters: { filterByNumericValues } } = useContext(SwContext);
  const renderRemoveButtons = () => filterByNumericValues
    .map(({ column, comparison, amount }) => (
      <div key={ column }>
        <div data-testid="filter">
          <span>
            {column}
            {' '}
            -
            {' '}
            {comparison}
            {' '}
            -
            {' '}
            {amount}
          </span>
          <button
            onClick={ () => removeFilter(column) }
            type="button"
          >
            X
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      {renderRemoveButtons()}
    </div>
  );
};

export default FilterButtons;
