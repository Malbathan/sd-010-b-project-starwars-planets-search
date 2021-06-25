import React from 'react';
import Provider from '../context/Provider';
import Table from '../components/Table';
import SearchInput from '../components/SearchInput';
import SearchSelected from '../components/SearchSelected';

function Home() {
  return (
    <Provider>
      <SearchInput />
      <SearchSelected />
      <Table />
    </Provider>
  );
}

export default Home;
