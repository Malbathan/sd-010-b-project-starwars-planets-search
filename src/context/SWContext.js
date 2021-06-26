import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const SWContext = createContext(null);

export default function SWStateContetx(props) {
  const { children } = props;
  const [filteredName, setFilteredName] = useState([]);

  const context = {
    filteredName,
    setFilteredName,
  };

  return (
    <main>
      <SWContext.Provider value={ context }>
        { children }
      </SWContext.Provider>
    </main>
  );
}

SWStateContetx.propTypes = PropTypes.shape({}).isRequired;
