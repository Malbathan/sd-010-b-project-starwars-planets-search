import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { planets, filters: { filter: {
    filterByName: { name } } } } = useContext(PlanetContext);

  const { setFilterByName, setFilterByNumber } = useContext(PlanetContext);

  const [chosenColumn, setColumn] = useState('');
  const [chosenComparisson, setComparisson] = useState('');
  const [chosenValue, setValue] = useState('');

  // setFilterByNumber(() => ({
  //   filter: {
  //     filterByNumericValues: [
  //       {
  //         column: chosenColumn,
  //         comparisson: chosenComparisson,
  //         value: chosenValue,
  //       },
  //     ],
  //   },
  // }));

  if (planets.length > 0) {
    return (
      <div>
        Filter By Name
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ (event) => setFilterByName({
            filter: {
              filterByName: {
                name: event.target.value,
              },
            },
          }) }
        />
        <section>
          First Numeric Filter
          {' '}
          <select
            id="column"
            data-testid="column-filter"
            onChange={ (event) => setColumn(event.target.value) }
          >
            <option value="population" selected="selected">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>

          </select>
          <select
            id="comparisson"
            data-testid="comparison-filter"
            onChange={ (event) => setComparisson((event.target.value)) }
          >
            <option selected="selected">menor que</option>
            <option>maior que</option>
            <option>igual a</option>
          </select>
          <input
            id="value"
            type="number"
            data-testid="value-filter"
            onChange={ (event) => setValue(event.target.value) }
          />

          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => setFilterByNumber({
              filter: {
                filterByNumericValues: [
                  {
                    column: chosenColumn,
                    comparisson: chosenComparisson,
                    value: chosenValue,
                  },
                ],
              },
            }) }
          >
            Apply Filter
          </button>
        </section>
        {/* <section>
          Second Numeric Filter
          <select
            type="text"
            id="column"
            data-testid="column-filter"
            value={ column }
            onClick={ (event) => setFilterByNumber((
              {
                filter: {
                  filterByNumericValues: [
                    {
                      ...value,
                      ...comparisson,
                      column: event.target.value,
                    },
                  ],
                },
              })) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>

          </select>
          <select
            id="comparisson"
            data-testid="comparison-filter"
            value={ comparisson }
            onClick={ (event) => setFilterByNumber((
              {
                filter: {
                  filterByNumericValues: [
                    {
                      comparisson: event.target.value,
                      value,
                      column,
                    },
                  ],
                },
              })) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input
            id="value"
            type="number"
            value={ value }
            data-testid="value-filter"
            onChange={ (event) => setFilterByNumber((
              {
                filter: {
                  filterByNumericValues: [
                    {
                      ...comparisson,
                      ...column,
                      value: event.target.value,
                    },
                  ],
                },
              })) }
          />
        </section> */}

      </div>
    );
  }
  return 'loading';
}
export default Header;
