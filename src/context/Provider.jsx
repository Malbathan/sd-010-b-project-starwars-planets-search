import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const comparisonFunc = {
  'maior que': (num1, num2) => num1 > num2,
  'menor que': (num1, num2) => num1 < num2,
  'igual a': (num1, num2) => num1 === num2,
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredByNumber, setFilteredByNumber] = useState([]);
  const [textFilter, setTextFilter] = useState('');
  const [wasFilteredByNumber, setWasFilteredByNumber] = useState(false);
  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    numericFilter: '',
  });

  // didMount
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((resp) => resp.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const handleChangeText = ({ target: { value } }) => {
    setTextFilter(value);
  };

  const handleSelect = ({ target: { name, value } }) => {
    setNumericFilter({ ...numericFilter, [name]: value });
  };

  const handleFilter = () => {
    setWasFilteredByNumber(true);
  };

  // filter by name
  useEffect(() => {
    if (textFilter) {
      const filterByName = data.filter(
        ({ name }) => name.toLowerCase().includes(textFilter.toLowerCase()),
      );
      if (filterByName.length > 0) {
        setFilteredByName(filterByName);
      } else {
        setFilteredByName(data);
      }
    }
  }, [data, textFilter]);

  // filter by numeric value
  useEffect(() => {
    const { column, comparison, value } = numericFilter;
    if (numericFilter) {
      const filterByNumber = data.filter(
        (el) => comparisonFunc[comparison](parseFloat(el[column]), parseFloat(value)),
      );
      setFilteredByNumber(filterByNumber);
    } else {
      setWasFilteredByNumber(false);
    }
  }, [data, numericFilter]);

  const globalContext = {
    data,
    textFilter,
    numericFilter,
    filteredByName,
    handleChangeText,
    handleSelect,
    filteredByNumber,
    wasFilteredByNumber,
    handleFilter,
  };

  return (
    <PlanetsContext.Provider value={ globalContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.html,
}.isRequired;
export default PlanetsProvider;

// const filterByNumber = data.filter(
//   (el) => comparison[numericFilter.comparison](el[numericFilter.column], numericFilter),
// );
