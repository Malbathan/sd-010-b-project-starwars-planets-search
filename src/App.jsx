import React, { useEffect, useState } from 'react';
import './App.css';
import OptionsHeader from './Components/OptionsHeader';
import Table from './Components/Table';
import SwContext from './contexts/swContext';
import useLogicalFilter from './Hooks/useLogicalFilter';
import useNameFilter from './Hooks/useNameFilter';
import { getPlanets } from './services/API/starwarsApi';

function App() {
  const [swPlanets, setSwPlanets] = useState([]);
  const { filteredByNameData, filterName, setFilterName } = useNameFilter(swPlanets);
  const { FilteredLogicaldata } = useLogicalFilter(filteredByNameData);
  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await getPlanets();
      setSwPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const swContext = { data: FilteredLogicaldata,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ] },
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
