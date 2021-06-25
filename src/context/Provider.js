import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [arrCol] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [arrComp] = useState(['maior que', 'menor que', 'igual a']);
  const [dropDownF, setDropDownF] = useState({
    column: 'population',
    comparison: 'maior que',
    number: 0,
  });

  const handleState = ({ name, value }) => {
    setDropDownF({ ...dropDownF, [name]: value });
  };

  const filterSwitch = () => {
    const { column, comparison, number } = dropDownF;
    switch (comparison) {
    case 'maior que':
      return setFilteredData(data.filter((i) => Number(i[column]) > Number(number)));
    case 'menor que':
      return setFilteredData(data.filter((i) => Number(i[column]) < Number(number)));
    case 'igual a':
      return setFilteredData(data.filter((i) => Number(i[column]) === Number(number)));
    default:
      break;
    }
  };
  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((value) => value.json());
      setData(results);
    };
    getPlanets();
  }, []);

  const handleDataByName = ({ value }) => {
    const dataLowerCase = data.filter(({ name }) => {
      const nameLowerCase = name.toLowerCase();
      const valueLowerCase = value.toLowerCase();
      return nameLowerCase.includes(valueLowerCase);
    });
    setFilteredData(dataLowerCase);
  };

  const optionMaker = (type) => {
    const arrColMap = arrCol.map((i) => (<option key={ i } value={ i }>{i}</option>));
    const arrCompMap = arrComp.map((i) => <option key={ i } value={ i }>{i}</option>);
    return type === 'column' ? arrColMap : arrCompMap;
  };

  const trueData = () => {
    if (filteredData.length > 0) return filteredData;
    return data;
  };

  useEffect(() => {
    if (data.length) {
      const allKeys = Object.keys(data[0]);
      setKeys(allKeys.filter((key) => key !== 'residents'));
    }
  }, [data]);

  const truePlanets = trueData();

  const context = {
    data,
    keys,
    setKeys,
    handleDataByName,
    optionMaker,
    truePlanets,
    handleState,
    filterSwitch,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
