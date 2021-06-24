import React, { useState, useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import { columns, conditionals } from '../services/Planets';

function FilterNumbers() {
  const { state, setState } = useContext(GlobalContext);
  const [options, setOptions] = useState(columns);
  const [attribute, setAttribute] = useState(options[0]);
  const [conditional, setConditional] = useState(conditionals[0]);
  const [input, setInput] = useState(0);
  const { filterByNumber, filters } = state;

  useEffect(() => {
    setAttribute(options[0]);
    setInput(0);
  }, [options]);

  const addFilter = () => {
    const newFilter = {
      column: attribute,
      comparison: conditional,
      value: input,
    };
    setState({
      ...state,
      filterByNumber: [...filterByNumber, newFilter],
      filters: [...filters, attribute],
    });
    setOptions(options.filter((option) => option !== attribute));
  };

  const deleteFilter = (column) => {
    setOptions([...options, column]);
    setState({
      ...state,
      filterByNumber: filterByNumber.filter(({ column: c }) => c !== column),
      filters: [...filters.filter((op) => op !== column)],
    });
  };

  const filterRead = () => filters.map((filter, idx) => (
    <div key={ `btn - ${idx}` } data-testid="filter">
      <Button
        id="btn-filterss"
        text={ `x ${filter}` }
        handle={ () => deleteFilter(filter) }
      >
        {filter}
      </Button>
    </div>
  ));

  return (
    <div>
      <Select
        value={ attribute }
        handle={ setAttribute }
        options={ options }
        id="column-filter"
      />
      <Select
        value={ conditional }
        handle={ setConditional }
        options={ conditionals }
        id="comparison-filter"
      />
      <Input value={ input } handle={ setInput } id="value-filter" type="number" />
      <Button id="button-filter" handle={ addFilter } text="Adicionar" />
      {filterRead()}
    </div>
  );
}

export default FilterNumbers;
