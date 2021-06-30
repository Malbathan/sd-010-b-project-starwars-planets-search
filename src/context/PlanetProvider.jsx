import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [info, setInfo] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
  });

  async function getInfo() {
    const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
    const out = results.map((result) => { delete result.residents; return result; });
    setInfo(out);
  }

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    function filterFunc() {
      const nameFilter = info.filter((value) => value.name.includes(filter.name));
      setFiltered(nameFilter);
    }
    filterFunc();
  }, [filter, info]);

  if (info.length === 0) return (<h2>Loading...</h2>);
  return (
    <PlanetContext.Provider value={ { info, getInfo, filter, setFilter, filtered } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
