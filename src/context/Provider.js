import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../API/getPlanets';
import Context from './Context';

function Provider({ children }) {
  // states

  const [planetsList, setPlanetsList] = useState([]);
  const [nameFilter, setNameFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  );

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const fetchPlanets = async () => {
    const planetsApi = await getPlanets();
    setPlanetsList(planetsApi);
    console.log(planetsApi);
  };
  // tirei o useEffect da table e deixei no provider pois estava dando loop infinito de requisicoes a api
  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planetsList,
    fetchPlanets,
    nameFilter,
    setNameFilter,
    numericFilter,
    setNumericFilter,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
