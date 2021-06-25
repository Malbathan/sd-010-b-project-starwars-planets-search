import PropTypes from 'prop-types';
import React, { useState } from 'react';
import starWarsContext from './startWarsContext';

function StartWarsProvider({ children }) {
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [{ column: '', comparison: '', value: '' }] },
    },

  );

  const contextValue = {
    filter,
    func: setFilter,
  };
  return (
    <starWarsContext.Provider value={ contextValue }>
      {children}
    </starWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StartWarsProvider;
