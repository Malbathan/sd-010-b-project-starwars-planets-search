import { createContext } from 'react';

// export const initialState = {
//   isFetching: true,
//   data: [],
//   dataFiltered: undefined,
//   filters: {
//     filterOn: false,
//     details: ['population', 'orbital_period', 'diameter',
//       'rotation_period', 'surface_water'],
//     operator: ['maior que', 'menor que', 'igual a'],
//     options: {
//       filterByName: {
//         name: '', filterNameOn: false,
//       },
//       filterByTypes: {
//         column: 'population', comparison: 'maior que', number: '', filterTypesOn: false,
//       },
//       filteredByNumbers: [],
//     },
//   },
// };

export const PLANETS = {
  isFetching: true,
  data: [],
  dataFiltered: undefined,
};

export const OPTIONS = {
  details: ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'],
  operator: ['maior que', 'menor que', 'igual a'],
};

export const FILTERS = {
  filterOn: false,
  filterNameOn: false,
  filterTypesOn: false,
  name: '',
  column: 'population',
  comparison: 'maior que',
  number: '',
  filteredByNumbers: [],
};

export const initialState = { ...PLANETS, ...OPTIONS, ...FILTERS };

const store = createContext(initialState);

export default store;
