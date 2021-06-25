import React from 'react';

import NameFilter from './NameFilter';
import NumericValuesFilter from './NumericValuesFilter';

function Filters() {
  return (
    <header>
      <NameFilter />
      <NumericValuesFilter />
    </header>
  );
}

export default Filters;
