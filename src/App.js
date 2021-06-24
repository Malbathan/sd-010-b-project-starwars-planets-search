import React, { useState } from 'react';
import GlobalContext from './context/GlobalContext';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import FilterNumbers from './components/FilterNumbers';
import SortOptions from './components/SortOptions';

const INITIAL_STATE = {
  filterByName: '',
  filterByNumber: [],
  filters: [],
  order: ['', ''],
};

function App() {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <GlobalContext.Provider value={ { state, setState } }>
      <SearchInput />
      <FilterNumbers />
      <SortOptions />
      <Table />
    </GlobalContext.Provider>
  );
}

export default App;
