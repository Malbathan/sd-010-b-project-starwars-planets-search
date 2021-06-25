import { createContext } from 'react';

export const initialState = {
  isFetching: true,
  data: [],
  dataFiltered: undefined,
  filters: {
    filterOn: false,
    details: ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'],
    operator: ['maior que', 'menor que', 'igual a'],
    options: {
      filterByName: {
        name: '', filterNameOn: false,
      },
      filterByTypes: {
        column: 'population', comparison: 'maior que', number: 0, filterTypesOn: false,
      },
    },
  },
};

const store = createContext(initialState);

export default store;
