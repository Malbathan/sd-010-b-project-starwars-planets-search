import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import TableContext from './TableContext';
import fetchData from './services/fetchData';

function App() {
  const [data, setData] = useState({ results: [] });
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  useEffect(() => {
    async function settingData() {
      const dataToSet = await fetchData();
      setData(dataToSet);
    }
    settingData();
  }, []);

  return (
    <TableContext.Provider value={ { data, filters, setFilters } }>
      <Table />
    </TableContext.Provider>
  );
}

export default App;
