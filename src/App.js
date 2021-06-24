import React from 'react';
import './App.css';
import ApiData from './contexts/ApiData';
import Search from './components/Search';

function App() {
  return (
    <ApiData>
      <Search />
    </ApiData>
  );
}

export default App;
