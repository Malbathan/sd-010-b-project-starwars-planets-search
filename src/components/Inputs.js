import React, { useContext, useState } from 'react';
import planetsContext from '../contextAPI/planetsContext';

function Inputs() {
  const {
    handleName,
    handleOperatorFilter,
    operators: { operatorOptions },
    filter,
  } = useContext(planetsContext);
  const [moreOrLessFilter, setMoreOrLessFilter] = useState({
    columnHeader: 'population',
    operator: 'maior que',
    numberForComparison: 0,
  });

  const sendStateToFilter = () => {
    const { columnHeader, operator, numberForComparison } = moreOrLessFilter;
    return handleOperatorFilter(columnHeader, operator, numberForComparison);
  };

  const prepareMoreOrLessFilter = ({ name, value }) => {
    setMoreOrLessFilter({ ...moreOrLessFilter, [name]: value });
  };

  const renderColumnHeaderOptions = () => {
    const { filterByNumericValues } = filter;
    if (filterByNumericValues) {
      const forbidenNames = filterByNumericValues.map(({ column }) => (column));
      const options = [];
      operatorOptions.forEach((operator, index) => {
        let isForbiden = 0;
        forbidenNames.forEach((name) => {
          if (operator === name) {
            isForbiden = 1;
          }
        });
        if (isForbiden === 0) {
          options.push(<option key={ index }>{ operator }</option>);
        }
      });
      return options;
    }
    const options = operatorOptions
      .map((element, index) => (<option key={ index }>{ element }</option>));
    return (options);
  };

  return (
    <header>
      <section>
        <input
          type="text"
          name="name"
          data-testid="name-filter"
          placeholder="Busque por nomes"
          onChange={ ({ target }) => handleName(target) }
        />
      </section>
      <section>
        <select
          data-testid="column-filter"
          name="columnHeader"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        >
          { renderColumnHeaderOptions() }
        </select>
        <select
          data-testid="comparison-filter"
          name="operator"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="numberForComparison"
          data-testid="value-filter"
          onChange={ ({ target }) => prepareMoreOrLessFilter(target) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => sendStateToFilter() }
        >
          Filtrar
        </button>
      </section>
    </header>
  );
}

export default Inputs;
