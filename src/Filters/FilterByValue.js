import React, { useContext } from 'react';
import columnTable from '../api/References/columnTable';
import comparisonTable from '../api/References/comparisonTable';
import AppContext from '../contextApi/Context';

export default function FilterByValue() {
  const { listOfContext: { state, setstate } } = useContext(AppContext);

  const filterColumn = (param) => {
    setstate({
      ...state,
      filters: {
        ...state.filters,
        filterByValue:
          {
            ...state.filters.filterByValue,
            column: param,
          },
      },
    });
  };

  const filterComparison = (param) => {
    setstate({
      ...state,
      filters: {
        ...state.filters,
        filterByValue:
          {
            ...state.filters.filterByValue,
            comparison: param,
          },
      },
    });
  };

  const filterValue = (param) => {
    setstate({
      ...state,
      filters: {
        ...state.filters,
        filterByValue:
          {
            ...state.filters.filterByValue,
            value: param,
          },
      },
    });
  };

  function columnFilter() {
    return (
      <select
        defaultValue="Chose here"
        data-testid="column-filter"
        onChange={ (e) => filterColumn(e.target.value) }
      >
        <option disabled hidden>Choose here</option>
        { columnTable.map((curr) => (
          <option key={ curr }>{ curr }</option>
        ))}
      </select>
    );
  }

  function comparisonFilter() {
    return (
      <select
        defaultValue="Chose here"
        data-testid="comparison-filter"
        onChange={ (e) => filterComparison(e.target.value) }
      >
        <option disabled hidden>Choose here</option>
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
          onChange={ (e) => filterValue(e.target.value) }
        />
      </label>
    );
  }

  // useEffect(() => {
  //   console.log(state.filters.filterByValue.column);
  //   console.log(state.filters.filterByValue.comparison);
  //   console.log(state.filters.filterByValue.value);
  // }, [state]);

  return (
    <div>
      { columnFilter() }
      { comparisonFilter() }
      { valueFilter() }
    </div>
  );
}
