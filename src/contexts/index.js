import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext('');

function Provider({ children }) {
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('>');
  const [number, setNumber] = useState(0);
  const [fullFilter, setFullFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: '>',
        value: 0,
      },
    ],
  });

  const value = {
    name,
    setName,
    column,
    setColumn,
    setOperator,
    setNumber,
    operator,
    number,
    fullFilter,
    setFullFilter,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
