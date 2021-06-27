import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

export default function Filter() {
  const { filters, setFilters } = useContext(SWContext);

  const filterName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  return (
    <div>
      <input
        type="text"
        onChange={ filterName }
        placeholder="Search"
        data-testid="name-filter"
      />
    </div>
  );
}
