import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { getPlanets, theader } from '../../services/Planets';
import Theader from './Theader';
import Tbody from './Tbody';

const Table = () => {
  const [planets, setPlanets] = useState([]);
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    getPlanets().then(setPlanets);
    theader().then(setAttributes);
  }, []);

  return (
    <table>
      <Theader attributes={ attributes } />
      <Tbody planets={ planets } />
    </table>
  );
};

export default Table;
