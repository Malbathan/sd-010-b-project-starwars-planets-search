import React, { useState } from 'react';
import { useStarContext } from '../context/myContext';

const categories = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const measures = [
  'maior que',
  'menor que',
  'igual a',
];

const categoriesDel = [];

export default function StarForm() {
  // REFATORAR: criar apenas um estado com todas as chaves. Criar uma função genérica pra controlar os inputs.

  const { starData, setNewState, newState } = useStarContext();
  const [categoriesArr, setCategoriesArr] = useState(categories);
  const [category, setCategory] = useState('population');
  const [measure, setMeasures] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [boolSubmit, setBoolSubmit] = useState(false);
  const [sortCategory, setSortCategory] = useState('name');
  const [sortType, setSortType] = useState('');

  const filteredCategories = () => {
    if (boolSubmit) {
      setBoolSubmit(false);
      setCategory(categoriesArr[0]);
      const item = categoriesArr.find((elem) => elem === category);
      categoriesDel.push(item);
      setCategoriesArr(categoriesArr.filter((filter) => filter !== category));
    }
    return categoriesArr;
  };

  // REFATORAR: resolver erro de soma dos filtros

  const reestartFiltering = ({ target: { value } }) => {
    const item = categoriesDel.find((elem) => elem === value);
    const index = categoriesDel.indexOf(item);
    categoriesDel.splice(index, 1);
    setCategoriesArr([...categoriesArr, value]);
    setNewState({
      filters: {
        ...newState.filters,
        filterByNumericValues: [],
      },
    });
  };

  const handleSubmit = () => {
    setBoolSubmit(true);
    setNewState({
      filters: {
        ...newState.filters,
        filterByNumericValues: [
          ...newState.filters.filterByNumericValues,
          {
            column: category,
            comparison: measure,
            value: number,
          },
        ],
      },
    });
  };

  const sortDataByType = () => {
    setNewState({
      filters: {
        ...newState.filters,
        order: {
          column: sortCategory,
          sort: sortType,
        },
      },
    });
  };

  // Form Inputs

  const handleInput = () => (
    <label htmlFor="name">
      FilterByName:
      <input
        data-testid="name-filter"
        id="name"
        name="byname"
        type="text"
        onChange={ (e) => setNewState({
          filters: {
            ...newState.filters,
            filterByName: {
              name: e.target.value,
            },
          },
        }) }
      />
    </label>
  );

  const handleSelectCategory = () => (
    <label htmlFor="category">
      Category:
      <select
        data-testid="column-filter"
        value={ category }
        name="category"
        id="category"
        onChange={ (e) => setCategory(e.target.value) }
      >
        {filteredCategories().map((item, index) => <option key={ index }>{item}</option>)}
      </select>
    </label>
  );

  const handleMeasures = () => (
    <label htmlFor="measure">
      Medidas:
      <select
        data-testid="comparison-filter"
        value={ measure }
        name="measure"
        id="measure"
        onChange={ (e) => setMeasures(e.target.value) }
      >
        {measures.map((item, index) => <option key={ index }>{item}</option>)}
      </select>
    </label>);

  const handleNumberValue = () => (
    <label htmlFor="number">
      Number Value:
      <input
        type="number"
        data-testid="value-filter"
        name="number"
        id="number"
        value={ number }
        onChange={ (e) => setNumber(e.target.value) }
      />

    </label>
  );

  const handleDelCategories = () => (
    <div>
      {categoriesDel.map((filter, index) => (
        <span key={ index } data-testid="filter">
          {filter}
          <button
            value={ filter }
            type="button"
            onClick={ reestartFiltering }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );

  const handleSortFilter = () => {
    if (starData.length) {
      const [keyObj] = starData;
      const arrKeys = [keyObj];
      return (
        <div>
          <select
            data-testid="column-sort"
            value={ sortCategory }
            onChange={ (e) => setSortCategory(e.target.value) }
          >
            {arrKeys.map((key) => Object.keys(key).map((item, index) => {
              if (item !== 'residents') {
                return (
                  <option
                    key={ index }
                  >
                    {item}
                  </option>
                );
              }
              return null;
            }))}
          </select>
          <label htmlFor="cresc">
            Orem crescente
            <input
              data-testid="column-sort-input-asc"
              value="ASC"
              onClick={ (e) => setSortType(e.target.value) }
              type="radio"
              name="sort"
            />
          </label>
          <label htmlFor="desc">
            Orem decrescente
            <input
              data-testid="column-sort-input-desc"
              onClick={ (e) => setSortType(e.target.value) }
              value="DESC"
              type="radio"
              name="sort"
            />
          </label>
          <button
            data-testid="column-sort-button"
            type="button"
            onClick={ sortDataByType }
          >
            Ordenar
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <form>
        {handleInput()}
        {handleSelectCategory()}
        {handleMeasures()}
        {handleNumberValue()}
        <button
          id="btn-filter"
          data-testid="button-filter"
          type="button"
          onClick={ handleSubmit }
        >
          Filtrar
        </button>
        {handleDelCategories()}
      </form>

      <form>
        {handleSortFilter()}
      </form>

    </div>
  );
}
