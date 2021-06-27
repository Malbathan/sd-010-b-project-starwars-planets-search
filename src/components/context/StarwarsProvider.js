import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarwarsContext from './StarwarsContext';
import getPlanets from '../../services/getPlanets';

function StarwarsProvider({ children }) { // props descontruction
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    setIsLoading(true);
    const planetsAPI = await getPlanets();
    setData(planetsAPI);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarwarsContext.Provider value={ { isLoading, data, fetchPlanets } }>
      {children}
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
