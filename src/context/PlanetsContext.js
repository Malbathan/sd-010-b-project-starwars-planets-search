import React from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/planetsApi';

export const DataContext = React.createContext(null);

export default function PlanetsContext(props) {
  const { children } = props;
  const [planets, setPlanets] = React.useState([]);
  const [filteredName, setFilteredName] = React.useState('');

  React.useEffect(() => {
    fetchPlanets()
      .then((res) => setPlanets(res));
  }, []);

  const context = {
    planets,
    filteredName,
    setFilteredName,
  };

  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}

PlanetsContext.propTypes = PropTypes.shape({}).isRequired;
