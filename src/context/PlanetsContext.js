import React from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/planetsApi';

const data = {
  filters:
  {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  },
};

export const DataContext = React.createContext(data);

export default function PlanetsContext(props) {
  const { children } = props;
  const [planets, setPlanets] = React.useState([]);
  // const [filteredName, setFilteredName] = React.useState('');
  const [columns, setColumns] = React.useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filters, setFilters] = React.useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {},
      ],
    },
  );

  const filterByName = (name) => setFilters({ ...filters, filterByName: { name } });

  const filterByNumericValues = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        }],
    });
    const index = columns.indexOf(column);
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  React.useEffect(() => {
    fetchPlanets()
      .then((res) => setPlanets(res));
  }, []);

  const context = {
    planets,
    columns,
    filters,
    filterByName,
    filterByNumericValues,
  };

  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}

PlanetsContext.propTypes = PropTypes.shape({}).isRequired;
