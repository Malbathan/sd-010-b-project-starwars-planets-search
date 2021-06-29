import React, { useContext } from 'react';
import columnTable from '../api/References/columnTable';
import comparisonTable from '../api/References/comparisonTable';
import AppContext from '../contextApi/Context';

export default function FilterByValue() {
  const { listOfContext: { state, setstate } } = useContext(AppContext);

  const filterColumn = ({ value }) => {
    setstate({
      ...state,
      filterByValue: [
        {
          ...state.filterByValue,
          column: value,
        },
      ],
    });
  };

  const filterComparison = ({ value }) => {
    setstate({
      ...state,
      filterByValue: [
        {
          ...state.filterByValue,
          comparison: value,
        },
      ],
    });
  };

  const filterValue = ({ value }) => {
    setstate({
      ...state,
      filterByValue: [
        {
          ...state.filterByValue,
          value,
        },
      ],
    });
  };

  function columnFilter() {
    return (
      <select
        data-testid="column-filter"
        onChange={ (e) => filterColumn(e.target) }
      >
        { columnTable.map((curr) => (
          <option key={ curr }>{ curr }</option>
        ))}
      </select>
    );
  }

  function comparisonFilter() {
    return (
      <select
        data-testid="comparison-filter"
        onChange={ (e) => filterComparison(e.target) }
      >
        { comparisonTable.map((curr) => (
          <option key={ curr }>{ curr }</option>
        ))}
      </select>
    );
  }

  function valueFilter() {
    return (
      <label htmlFor="input-value-filter">
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => filterValue(e.target) }
        />
      </label>
    );
  }

  return (
    <div>
      { columnFilter() }
      { comparisonFilter() }
      { valueFilter() }
      <buton type="button" data-testid="button-filter">Filtrar</buton>
    </div>
  );
}
