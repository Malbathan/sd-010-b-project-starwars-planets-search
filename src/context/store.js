import { createContext } from 'react';

export const initialState = {
  isFetching: true,
  data: [],
  dataFiltered: undefined,
  filters: {
    renderColumn: ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
    renderComparison: ['maior que', 'menor que', 'igual a'],
    filterOn: false,
    options: {
      filterByName: {
        name: '', filterNameOn: false,
      },
      filterByTypes: {
        column: '', comparison: '', number: 0, filterTypesOn: false,
      } },
    filterByNumericValues: [
      {
        column: [],
        comparison: [],
        value: null,
      },
    ],
  },
};

const store = createContext(initialState);

export default store;
