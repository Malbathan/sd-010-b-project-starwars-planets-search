import { useContext, useEffect, useState } from 'react';
import { FiltersContext, PlanetsContext } from '../context';

function useOrder() {
  const { filteredValues, setFilteredValues } = useContext(PlanetsContext);
  const { filters } = useContext(FiltersContext);
  const { order = { column: '', sort: '' } } = filters;
  const [orderNow, setOrderNow] = useState(false);

  function orderBySelectedValues() {
    const { column, sort } = order;
    const LESS_THAN = -1;
    if (sort === 'ASC') {
      return filteredValues.sort((a, b) => (
        a[column] < b[column] ? LESS_THAN : Number(a[column] > b[column]) // REF_1
      ));
    }
    return filteredValues.sort((b, a) => (
      a[column] < b[column] ? LESS_THAN : Number(a[column] > b[column])
    ));
  }

  useEffect(() => {
    console.log('useOrder');
    setFilteredValues(orderBySelectedValues());
  }, [orderNow]);

  return [orderNow, setOrderNow];
}

export default useOrder;
