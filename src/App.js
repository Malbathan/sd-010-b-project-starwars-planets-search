import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table';
import TableContext from './TableContext';
import fetchData from './services/fetchData';

function App() {
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    async function settingData() {
      const dataToSet = await fetchData();
      setData(dataToSet);
    }
    settingData();
  }, []);
  return (
    <TableContext.Provider value={ data }>
      <Table />
    </TableContext.Provider>
  );
}

export default App;
