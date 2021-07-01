import React, { useContext, useEffect } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

function Order() {
  const { filteredValues, setFilteredValues, orderColumns } = useContext(PlanetsContext);
  const { filters, setFilters, orderNow, setOrderNow } = useContext(FiltersContext);
  const { order = { column: 'name', sort: 'ASC' } } = filters;

  useEffect(() => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        ...order,
      },
    });
  }, []);

  // function orderBySelectedValues() {
  //   const { column, sort } = order;
  //   const LESS_THAN = -1;
  //   if (sort === 'ASC') {
  //     return filteredValues.sort((a, b) => (
  //       a[column] < b[column] ? LESS_THAN : Number(a[column] > b[column]) // REF_1
  //     ));
  //   }
  //   return filteredValues.sort((b, a) => (
  //     a[column] < b[column] ? LESS_THAN : Number(a[column] > b[column])
  //   ));
  // }

  function sortByOrder(a, b) {
    const { column } = order;
    return a[column].localeCompare(b[column], undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  }

  function orderBySelectedValues() {
    const { sort } = order;
    if (sort === 'ASC') {
      return filteredValues.sort((a, b) => sortByOrder(a, b));
    }
    return filteredValues.sort((a, b) => sortByOrder(b, a));
  }

  // useEffect(() => {
  //   console.log('useOrder');
  //   setFilteredValues(orderBySelectedValues());
  // }, [orderNow]);

  function handleChange({ target: { name, value } }) {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        [name]: value,
      },
    });
  }

  function handleClick() {
    setFilteredValues(orderBySelectedValues());
    setOrderNow(!orderNow);
  }

  return orderColumns && (
    <div>
      <select name="column" onChange={ handleChange } data-testid="column-sort">
        {orderColumns.map((column, index) => (
          <option key={ `${column}.${index}` }>{ column }</option>
        ))}
      </select>
      <input
        type="radio"
        name="sort"
        value="ASC"
        onChange={ handleChange }
        data-testid="column-sort-input-asc"
      />
      Ordem Crescente
      <input
        type="radio"
        name="sort"
        value="DESC"
        onChange={ handleChange }
        data-testid="column-sort-input-desc"
      />
      Ordem Decrescente
      <button type="button" onClick={ handleClick } data-testid="column-sort-button">
        Ordenar
      </button>
    </div>
  );
}

export default Order;
