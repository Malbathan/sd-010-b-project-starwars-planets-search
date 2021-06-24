import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const myContext = createContext([() => {}]);

export default function StarContextProvider({ children }) {
  const state = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  };

  const [starData, setStarData] = useState([]);
  const [newState, setNewState] = useState(state);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((data) => setStarData(data.results));
  }, []);

  const handleNumericsFilters = () => {
    const { filterByNumericValues } = newState.filters;
    const {
      column,
      comparison,
      value } = filterByNumericValues[filterByNumericValues.length - 1];

    if (comparison === 'maior que') {
      return starData.filter((elem) => +elem[column] > +value);
    } if (comparison === 'menor que') {
      return starData.filter((elem) => +elem[column] < +value);
    } if (comparison === 'igual a') {
      return starData.filter((elem) => +elem[column] === +value);
    }
  };

  const checkIsANumber = (a, b) => {
    const { order } = newState.filters;
    const { column } = order;
    const num = -1;

    if (Number.isInteger(Number(a[column]))) {
      return (
        +a[column]
< +b[column] ? num : 1
      );
    }
    return (
      a[column]
< b[column] ? num : 1
    );
  };

  const handleSort = () => {
    const { order } = newState.filters;
    const { column, sort } = order;
    console.log(sort);
    const num = -1;
    if (sort === 'ASC') {
      return starData.sort((a, b) => checkIsANumber(a, b));
    }
    if (sort === 'DESC') {
      return starData.sort((a, b) => {
        if (Number.isInteger(Number(b[column]))) {
          return (
            +b[column]
  < +a[column] ? num : 1
          );
        }
        return (
          b[column]
  < a[column] ? num : 1
        );
      });
    }
  };

  const filtersData = () => {
    const { name } = newState.filters.filterByName;
    const { filterByNumericValues, order } = newState.filters;
    if (name) {
      return starData.filter((val) => val.name.toLowerCase()
        .includes(newState.filters.filterByName.name.toLowerCase()));
    }
    if (filterByNumericValues.length) {
      return handleNumericsFilters();
    }

    if (order) {
      return handleSort();
    }
    return starData;
  };

  return (
    <myContext.Provider
      value={ {
        starData,
        setNewState,
        filtersData,
        newState,
        state,
      } }
    >
      { children }
    </myContext.Provider>
  );
}

export function useStarContext() {
  const context = useContext(myContext);
  const { starData, filtersData, setNewState, newState, state } = context;
  return { starData, filtersData, setNewState, newState, state };
}

StarContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};
