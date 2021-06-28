import React, { useState, useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

import { infoOptionsToCompare,
  comparisonOperators } from '../../services/selectOptionsArrays';

function NumericValuesFilter() {
  const { createNumericFilter } = useContext(PlanetsContext);
  const [columnOptions, setColumnOptions] = useState([...infoOptionsToCompare]);
  const [column, setColumn] = useState(columnOptions[0]);
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
    setColumn(columnOptions[0]);
    setComparison('maior que');
    setValue(0);
  };

  const removeSelectedColumnOption = () => {
    setColumnOptions(columnOptions.filter((option) => option !== column));
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
          columnOptions.map((info) => createInfoToCompareOption(info))
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
