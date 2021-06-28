import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

function ButtonFilter() {
  const { namePlanet, columnFiltered,
    comparison, value, setFilter, filter, setIsFiltered } = useContext(StarWarsContext);

  const { column } = columnFiltered;
  const { comparison: comparisonValue } = comparison;

  const { value: numberValue } = value;

  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilter({
            filterByName: {
              name: namePlanet,
            },
            filterByNumericValues: [
              ...filter.filterByNumericValues,
              {
                column,
                comparison: comparisonValue,
                value: numberValue,
              },
            ],
          });
          setIsFiltered(true);
        } }
      >
        Filtrar
      </button>

    </div>
  );
}

export default ButtonFilter;
