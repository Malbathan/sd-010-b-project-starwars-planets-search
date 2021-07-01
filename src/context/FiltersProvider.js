import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiltersContext } from '.';

function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({});
  const [orderNow, setOrderNow] = useState(false);
  // const [applyFilters, setApplyFilters] = useState(false);
  // setFilters({
  //   ...filters,
  //   filterByName: {
  //     name: '',
  //   },
  // });

  return (
    <FiltersContext.Provider
      value={ { filters, setFilters, orderNow, setOrderNow } }
    >
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FiltersProvider;
