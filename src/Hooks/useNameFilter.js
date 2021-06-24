import { useState } from 'react';

const useNameFilter = (data) => {
  const [filterName, setFilterName] = useState('');
  let filteredByNameData = data;
  if (filterName) {
    filteredByNameData = filteredByNameData
      .filter((planet) => planet.name.includes(filterName));
  }
  return {
    filteredByNameData,
    filterName,
    setFilterName,
  };
};

export default useNameFilter;
