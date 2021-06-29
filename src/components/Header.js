import React from 'react';
import FilterByName from '../Filters/FilterByName';
import FilterByValue from '../Filters/FilterByValue';

function Header() {
  return (
    <div>
      <FilterByName />
      <FilterByValue />
    </div>
  );
}

export default Header;
