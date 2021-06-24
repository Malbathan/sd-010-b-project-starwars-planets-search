import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { getPlanets, theader } from '../../services/Planets';
import Theader from './Theader';
import Tbody from './Tbody';

const Table = () => {
  const {
    state: { filterByName, filterByNumber, order },
  } = useContext(GlobalContext);

  const [column, sort] = order;
  const [planets, setPlanets] = useState([]);
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    getPlanets().then(setPlanets);
    theader().then(setAttributes);
  }, []);

  const filterToNumber = ({ comparison, value, column: c }, planet) => {
    switch (comparison) {
    case 'maior que':
      return +planet[c] > +value;
    case 'igual a':
      return +planet[c] === +value;
    case 'menor que':
      return +planet[c] < +value;
    default: {
      return false;
    }
    }
  };

  const createConditionals = (planet) => filterByNumber
    .map((cond) => filterToNumber(cond, planet));

  const filterPlanet = () => planets
    .filter((planet) => RegExp(filterByName, 'i')
      .test(planet.name) && createConditionals(planet).every((e) => e));

  // REFERÊNCIA: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

  const sortPlanet = (a, b) => {
    const magic = 1;
    if (sort === 'asc') return a[column] - b[column];
    if (sort === 'desc') return b[column] - a[column];
    return a.name > b.name ? magic : -magic;
  };

  return (
    <table>
      <Theader attributes={ attributes } />
      <Tbody planets={ filterPlanet().sort(sortPlanet) } />
    </table>
  );
};

export default Table;
