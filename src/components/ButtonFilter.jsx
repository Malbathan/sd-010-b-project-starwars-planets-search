import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function ButtonFilter() {
  const { setIsFiltered, setFilters, filters, setColumn } = useContext(StarWarsContext);

  const { column: { filters: { filterByNumericValues } } } = useContext(StarWarsContext);
  const { column } = filterByNumericValues[0];

  const { comparison: { filters: { filterByNumericValues:
    filterNumericValues } } } = useContext(StarWarsContext);
  const { comparison } = filterNumericValues[0];

  const { value: { filters: { filterByNumericValues:
    filterNumericValuesRename } } } = useContext(StarWarsContext);
  const { value } = filterNumericValuesRename[0];

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => {
        setIsFiltered(true);
        setFilters({
          filterByNumericValues: [
            ...filters.filterByNumericValues,
            {
              column,
              comparison,
              value,
            },
          ],
        });
      } }
    >
      Filtrar
    </button>
  );
}

export default ButtonFilter;
