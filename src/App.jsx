import React, { useEffect, useState } from 'react';
import './App.css';
import OptionsHeader from './Components/OptionsHeader';
import Table from './Components/Table';
import SwContext from './contexts/swContext';
import useNameFilter from './Hooks/useNameFilter';
import { getPlanets } from './services/API/starwarsApi';
import OPTIONS from './services/options/options';

function App() {
  const [swPlanets, setSwPlanets] = useState([]);
  const { filteredByNameData, filterName, setFilterName } = useNameFilter(swPlanets);
  const [filterList, setFilterList] = useState([]);
  const [options, setOptions] = useState([...OPTIONS]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setSwPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const handleFilter = ({ column, comparison, amount }) => {
    const payload = { column, comparison, amount };
    setFilterList([...filterList, payload]);
  };

  const removeFilter = (column) => {
    const arr = [...options];
    const newFilterList = filterList
      .filter(({ column: itemColumn }) => column !== itemColumn);
    setFilterList(newFilterList);
    if (arr.includes(column)) return;
    const oldIndex = OPTIONS.indexOf(column);
    arr.splice(oldIndex, 0, column);
    setOptions(arr);
  };

  const swContext = { data: filteredByNameData,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: filterList },
    handleFilter,
    setFilterName,
    removeFilter,
    options,
    setOptions,
  };

  return (
    <SwContext.Provider value={ swContext }>
      <OptionsHeader />
      <Table />
    </SwContext.Provider>
  );
}

export default App;
