import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = { data, setData, loading, setLoading };

  // async function fetchApi() {
  //   const planets = await getAPI();
  //   planets.map((planet) => delete planet.residents);
  //   setData(planets);
  //   setLoading(true);
  // }

  // useEffect(() => { fetchApi(); });

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
