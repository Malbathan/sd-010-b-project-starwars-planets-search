import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import api from '../services/api';

function PlanetProvider({ children }) {
  // useState([]) - pega o setData e coloca dentro de data
  const [data, setData] = useState([]);
  // verifica a conexão com a api
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState('');
  const [filterSearch, setFilterSearch] = useState([]);
  const [columnOptions, setcolumnOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [column, setCollums] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();
  const [filterNumber, setFilterNumber] = useState([]);

  // didMount -
  useEffect(() => { // função a ser execultada
    const getPlanets = async () => {
      // mostra o conteúdo chamado da api
      setData(await api());
      setIsFetching(false);
    };

    getPlanets(); //
  }, []); // [] - array vazio para receber os componentes

  useEffect(() => {
    setFilterSearch(
      data.filter((results) => results.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  const search = () => {
    setFilterSearch([]);
    if (comparison === 'maior que') {
      setFilterNumber(
        data.filter((results) => Number(results[column]) > value),
      );
    }
    if (comparison === 'menor que') {
      setFilterNumber(
        data.filter((results) => Number(results[column]) < value),
      );
    }
    if (comparison === 'igual a') {
      setFilterNumber(
        data.filter((planet) => Number(planet[column]) === Number(value)),
      );
    }
    setcolumnOptions(columnOptions.filter((item) => item !== column));
  };

  return (
    // data - componentes que terão acesso aos states
    // children - tudo que fica dentro desse provider será repassado no children (filhos)
    <PlanetContext.Provider
      value={ {
        data,
        isFetching,
        setName,
        filterSearch,
        columnOptions,
        filters: { filterByName: { name },
          filterByNumericValues: [{ column, comparison, value }] },
        setCollums,
        setComparison,
        setValue,
        filterNumber,
        search,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// element - você pode especificar que apenas um único filho pode ser passado para um componente como children.
PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;

// ajuda: https://qastack.com.br/programming/35456935/how-to-show-a-loading-indicator-in-react-redux-app-while-fetching-the-data
