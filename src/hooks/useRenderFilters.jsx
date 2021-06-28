import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const useRenderFilters = () => {
  const { filters, setFilter } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (index) => {
    filterByNumericValues.splice(index, 1);
    setFilter({ ...filters,
      filterByNumericValues: [...filterByNumericValues],
    });
  };

  return (
    <section>
      {filterByNumericValues.map((filter, index) => (
        <div key={ index } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button" onClick={ () => removeFilter(index) }>X</button>
        </div>
      ))}
    </section>
  );
};

export default useRenderFilters;
