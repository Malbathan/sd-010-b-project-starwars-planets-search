import React, { useState, useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

import { infoOptionsToCompare,
  comparisonOperators } from '../../services/selectOptionsArrays';

function NumericValuesFilter() {
  const { createNumericFilter } = useContext(PlanetsContext);
  const [column, setColumn] = useState(infoOptionsToCompare[0]);
  const [comparison, setComparison] = useState(comparisonOperators[0]);
  const [value, setValue] = useState(0);

  const createInfoToCompareOption = (info) => (
    <option key={ info }>
      { info }
    </option>
  );

  const createOperatorOption = (operator) => (
    <option key={ operator }>
      { operator }
    </option>
  );

  const resetFilters = () => {
    setColumn(infoOptionsToCompare[0]);
    setComparison('maior que');
    setValue(0);
  };

  const removeSelectedColumnOption = () => {
    const indexOfOptionToRemove = infoOptionsToCompare.indexOf(column);
    infoOptionsToCompare.splice(indexOfOptionToRemove, 1);
  };

  const handleFilterButton = () => {
    createNumericFilter({ column, comparison, value });
    removeSelectedColumnOption();
    resetFilters();
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          infoOptionsToCompare.map((info) => createInfoToCompareOption(info))
        }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        {
          comparisonOperators.map((operator) => createOperatorOption(operator))
        }
      </select>
      <input
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ (event) => setValue(event.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterButton() }
      >
        Filtrar
      </button>
    </section>
  );
}

export default NumericValuesFilter;
