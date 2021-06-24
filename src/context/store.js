import { createContext } from 'react';

export const initialState = {
  isFetching: true,
  data: [],
  dataFiltered: undefined,
  filters: {
    exec: false,
    column: ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
    filterByName: { name: null },
    filterByNumericValues: [
      {
        column: [],
        comparison: ['maior que', 'menor que', 'igual a'],
        value: null,
      },
    ],
  },
};

const store = createContext(initialState);

export default store;
