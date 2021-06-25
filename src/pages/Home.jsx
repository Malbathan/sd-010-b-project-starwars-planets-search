import React from 'react';
import Planets from '../components/Planets';
import Filters from '../components/Filters';

export default function Home() {
  return (
    <>
      <Filters />
      <Planets />
    </>
  );
}
