import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext('');

function Provider({ children }) {
  const [input, setInput] = useState('');

  const value = {
    input,
    setInput,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
