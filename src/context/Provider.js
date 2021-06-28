import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchStarWars from '../services/api';
import StarWarsContext from './StartWarsContext';

const initialState = {
  error: null,
  isFetching: false,
  data: [],
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    filterByNumericsCurrency: {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
    order: { column: 'name', sort: 'ASC' },
  },
};
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.getStarWarsAPI = this.getStarWarsAPI.bind(this);
    this.changeInputsByName = this.changeInputsByName.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.changeSelectColumn = this.changeSelectColumn.bind(this);
    this.changeSelectComparison = this.changeSelectComparison.bind(this);
    this.changeSelectValue = this.changeSelectValue.bind(this);
    this.handleFilterByNumericValues = this.handleFilterByNumericValues.bind(this);
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this);
    this.sortPlanets = this.sortPlanets.bind(this);
  }

  componentDidMount() {
    this.getStarWarsAPI();
  }

  handleFilterByNumericValues() {
    const {
      filters: { filterByNumericsCurrency }, data } = this.state;
    const { column, comparison, value } = filterByNumericsCurrency;
    this.setState((state) => ({
      filters: { ...state.filters,
        filterByNumericValues: [
          ...state.filters.filterByNumericValues,
          filterByNumericsCurrency,
        ],
      },
    }));
    const filteredData = data.filter((curr) => {
      if (comparison === 'maior que') {
        return Number(curr[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(curr[column]) < Number(value);
      }
      if (comparison === 'igual a') return curr[column] === value;
      return true;
    });
    this.setState({ data: filteredData });
  }

  handleRemoveFilter() {
    const { filters: { filterByNumericValues }, filters } = this.state;
    if (filterByNumericValues.length) {
      const previousFilters = filterByNumericValues.pop();
      this.setState(
        {
          filters: {
            ...filters, filterByNumericValues: previousFilters,
          },
        },
      );
    }
    this.getStarWarsAPI();
  }

  getStarWarsAPI() {
    const { isFetching } = this.state;
    if (isFetching) return;
    this.setState({ isFetching: true });
    fetchStarWars()
      .then((response) => {
        const { results } = response;
        results.forEach((starwars) => delete starwars.residents); // pedido no teste, remover a chave residents
        this.setState({ isFetching: false, data: results,
        });
        this.sortPlanets(); // funçao que organiza os planetas em ordem ascendente ou descendente, linha 171
      }, (error) => {
        this.setState({
          isFetching: false, error: error.message,
        });
      });
  }

  getValue(currency, nexting) {
    const cur = currency.match(/^[0-9]+$/) ? Number(currency) : currency;
    const nex = nexting.match(/^[0-9]+$/) ? Number(nexting) : nexting;
    return {
      cur,
      nex,
    };
  }

  changeInputsByName({ target }) { // guardando os valores digitados no input de name, pesquisa por nome, req 2
    const { name, value } = target;
    this.setState((state) => ({
      ...state,
      filters: {
        ...state.filters,
        filterByName: {
          [name]: value,
        },
      },
    }));
    this.filterByName(value);
  }

  changeSelectColumn({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          column: value,
        },
      },
    }));
  }

  changeSelectComparison({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          comparison: value,
        },
      },
    }));
  }

  changeSelectValue({ target }) {
    const { value } = target;
    this.setState((state) => ({
      filters: {
        ...state.filters,
        filterByNumericsCurrency: {
          ...state.filters.filterByNumericsCurrency,
          value,
        },
      },
    }));
  }

  filterByName(name) { // compoe o filtro por name na funçao changeinputsname, linha 118
    const { data } = this.state;
    const filteredData = data.filter((curr) => curr.name.includes(name));
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    this.setState({ data: filteredData });
    if (name === '') {
      this.getStarWarsAPI(); // caso nada digitado, retornar os valores da API inicial
    }
  }

  sortPlanets() { // organizaçao dos planetas, ascendente ou descendente, req 6
    const { filters: { order: { column, sort } }, data } = this.state;
    let sortedData = [];
    const negative = -1;
    const positive = 1;
    const nullo = 0;
    if (sort === 'ASC') {
      sortedData = data.sort((curr, next) => {
        const { cur, nex } = this.getValue(curr[column], next[column]);
        if (cur > nex) return positive;
        if (cur < nex) return negative;
        return nullo;
      });
    }
    if (sort === 'DESC') {
      sortedData = data.sort((curr, next) => {
        const { cur, nex } = this.getValue(curr[column], next[column]);
        if (cur > nex) return negative;
        if (cur < nex) return positive;
        return nullo;
      });
    }
    this.setState({ data: sortedData });
  }

  render() {
    const contextValue = {
      ...this.state,
      getStarWarsAPI: this.getStarWarsAPI,
      changeInputsByName: this.changeInputsByName,
      changeSelectColumn: this.changeSelectColumn,
      changeSelectComparison: this.changeSelectComparison,
      changeSelectValue: this.changeSelectValue,
      handleFilterByNumericValues: this.handleFilterByNumericValues,
      handleRemoveFilter: this.handleRemoveFilter,
      changeSortType: this.changeSortType,
      sortPlanets: this.sortPlanets,
      changeSortColumn: this.changeSortColumn,
    };
    const { children } = this.props;
    return (
      <StarWarsContext.Provider value={ contextValue }>
        {children}
      </StarWarsContext.Provider>
    );
  }
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
