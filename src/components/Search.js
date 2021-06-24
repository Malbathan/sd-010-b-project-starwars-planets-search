import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import SearchContext from '../contexts/SearchContext';
import Table from './Table';

function Search() {
  const planets = useContext(AppContext);

  const [search, setSearch] = useState('');

  const searchLowerCase = search.toLowerCase();

  const filteredPlanets = planets.filter(({ name }) => (
    name.toLowerCase().includes(searchLowerCase)
  ));

  function searchField(ev) {
    setSearch(ev.target.value);
  }

  const searchFilters = {
    filteredPlanets,
    search,
    searchField,
  };

  return (
    <SearchContext.Provider value={ searchFilters }>
      <Table />
    </SearchContext.Provider>
  );
}

export default Search;
