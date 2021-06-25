import React, { useEffect, useState } from 'react';
import './App.css';
import OptionsHeader from './Components/OptionsHeader';
import Table from './Components/Table';
import SwContext from './contexts/swContext';
import useNameFilter from './Hooks/useNameFilter';
import { getPlanets } from './services/API/starwarsApi';

function App() {
  const [swPlanets, setSwPlanets] = useState([]);
  const { filteredByNameData, filterName, setFilterName } = useNameFilter(swPlanets);
  const [filterList, setFilterList] = useState([]);

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

  const swContext = { data: filteredByNameData,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: filterList },
    handleFilter,
    setFilterName,
  };

  return (
    <SwContext.Provider value={ swContext }>
      <OptionsHeader />
      <Table />
    </SwContext.Provider>
  );
}

export default App;
