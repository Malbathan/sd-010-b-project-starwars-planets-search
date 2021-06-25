import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../api/planetsAPI';

class StarWarsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataOriginal: [],
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      filtersColumn: [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water'],
      filtersColumnOriginal: [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water'],
    };
    this.fetchPlanets = this.fetchPlanets.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.filterNUmbers = this.filterNUmbers.bind(this);
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  saveFilter(value) {
    this.setState({ filterByName: { name: value } },
      () => {
        const { dataOriginal, filterByName: { name } } = this.state;
        if (name !== '') {
          const dataTemp = dataOriginal.filter((planet) => planet.name.includes(name));
          this.setState({ data: dataTemp });
        } else {
          this.setState({ data: dataOriginal });
        }
      });
  }

  fetchPlanets() {
    this.setState({ data: [] }, async () => {
      const planets = await getPlanets();
      this.setState({
        data: planets,
        dataOriginal: planets,
      });
    });
  }

  filterNUmbers(filter) {
    this.setState((prevState) => ({
      filterByNumericValues: [...prevState.filterByNumericValues, filter],
    }), () => {
      const {
        filterByNumericValues,
        dataOriginal,
        filtersColumnOriginal,
        filtersColumn } = this.state;
      console.log(filterByNumericValues);
      if (filterByNumericValues !== []) {
        const dataFilter = filterByNumericValues.map(({
          column,
          value,
          comparison }) => {
          const filtro = dataOriginal.filter((planet) => {
            switch (comparison) {
            case 'maior que':
              return parseInt(planet[column], 10) > parseInt(value, 10);
            case 'menor que':
              return parseInt(planet[column], 10) < parseInt(value, 10);
            case 'igual a':
              return parseInt(planet[column], 10) === parseInt(value, 10);
            default:
              break;
            }
            return false;
          });
          filtersColumn.splice(filtersColumn.indexOf(column), 1);
          console.log(filtersColumn);
          this.setState({ filtersColumn });
          return filtro;
        });
        this.setState({ data: dataFilter[0] });
      } else {
        this.setState({ data: dataOriginal, filtersColumn: filtersColumnOriginal });
      }
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StarWarsContext.Provider
        value={ { ...this.state,
          saveFilter: this.saveFilter,
          filterNUmbers: this.filterNUmbers } }
      >
        {children}
      </StarWarsContext.Provider>
    );
  }
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
