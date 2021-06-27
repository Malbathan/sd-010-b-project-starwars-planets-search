import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

export default function SWProvider(props) {
  const { children } = props;

  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '', comparison: '', value: 0 }],
  });

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  return (
    <main>
      <SWContext.Provider value={ context }>
        { children }
      </SWContext.Provider>
    </main>
  );
}

SWProvider.propTypes = PropTypes.node.isRequired;
